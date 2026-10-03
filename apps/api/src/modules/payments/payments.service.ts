import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import type { Payment, Prisma } from '@prisma/client';
import {
  STAR_PRODUCTS,
  STAR_SUBSCRIPTION_PERIOD_SECONDS,
  type InvoiceResponseDto,
  type StarProduct,
  type StarProductDto,
  type StarProductId,
} from '@mascot/shared';
import { AppConfig } from '../../config/app-config';
import { AppException, NotFound } from '../../common/errors';
import { createId } from '../../common/utils/id';
import { addDays } from '../../common/utils/time';
import { MetricsService } from '../../infra/metrics/metrics.service';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { QueueService } from '../../infra/queue/queue.service';
import { AbuseService } from '../moderation/abuse.service';
import { QuotaService } from '../quota/quota.service';
import { TelegramBotService } from '../telegram/telegram-bot.service';
import type { TgPreCheckoutQuery, TgRefundedPayment, TgSuccessfulPayment, TgUser } from '../telegram/telegram.types';

/** Grace period before a recurring subscription without a renewal payment is expired. */
const RENEWAL_GRACE_MS = 6 * 3600_000;

/**
 * Telegram Stars payments.
 *
 * Flow: POST /payments/invoice → createInvoiceLink (XTR, optional subscription_period)
 *   → Mini App WebApp.openInvoice(url) → bot receives pre_checkout_query (answer ≤ 10 s)
 *   → message.successful_payment → fulfil (idempotent by telegram_payment_charge_id)
 *   → renewals arrive as successful_payment with is_recurring=true, is_first_recurring=false
 *   → refunds arrive as message.refunded_payment (or are initiated from the admin panel).
 */
@Injectable()
export class PaymentsService {
  private readonly logger = new Logger(PaymentsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly bot: TelegramBotService,
    private readonly quota: QuotaService,
    private readonly config: AppConfig,
    private readonly metrics: MetricsService,
    private readonly queues: QueueService,
    private readonly abuse: AbuseService,
  ) {}

  products(): StarProductDto[] {
    return Object.values(STAR_PRODUCTS).map((p) => ({
      id: p.id,
      kind: p.kind,
      title: p.title,
      description: p.description,
      stars: p.stars,
      premiumDays: p.premiumDays ?? null,
      credits: p.credits ?? null,
      badge: p.badge ?? null,
    }));
  }

  async createInvoice(userId: string, productId: StarProductId): Promise<InvoiceResponseDto> {
    const product = STAR_PRODUCTS[productId];
    if (product.kind === 'subscription') {
      const active = await this.prisma.subscription.findFirst({
        where: { userId, isRecurring: true, status: 'ACTIVE', currentPeriodEnd: { gt: new Date() } },
      });
      if (active) throw new AppException('ALREADY_SUBSCRIBED', 'You already have an active Premium subscription.', HttpStatus.CONFLICT);
    }
    const id = createId();
    await this.prisma.payment.create({
      data: { id, userId, productId, amount: product.stars, currency: 'XTR', status: 'PENDING', invoicePayload: id },
    });
    const invoiceUrl = await this.bot.createInvoiceLink({
      title: product.title,
      description: product.description,
      payload: id,
      prices: [{ label: product.title, amount: product.stars }],
      subscriptionPeriod: product.kind === 'subscription' ? STAR_SUBSCRIPTION_PERIOD_SECONDS : undefined,
    });
    this.metrics.paymentsTotal.inc({ product: productId, outcome: 'invoice' });
    return { paymentId: id, invoiceUrl };
  }

  /** Must answer within 10 seconds or Telegram cancels the payment. */
  async handlePreCheckout(query: TgPreCheckoutQuery): Promise<void> {
    let error: string | null = null;
    try {
      const payment = await this.prisma.payment.findUnique({ where: { id: query.invoice_payload }, include: { user: true } });
      if (!payment) error = 'Invoice not found. Please try again from the app.';
      else if (payment.status !== 'PENDING') error = 'This invoice was already used. Please create a new one.';
      else if (payment.user.telegramId !== BigInt(query.from.id)) error = 'This invoice belongs to another account.';
      else if (payment.amount !== query.total_amount || query.currency !== 'XTR') error = 'Price changed. Please reopen the offer.';
      else if (payment.user.isBanned) error = 'Account suspended.';
    } catch (err) {
      this.logger.error(`pre-checkout validation failed: ${(err as Error).message}`);
      error = 'Temporary error, please retry.';
    }
    await this.bot.answerPreCheckoutQuery(query.id, error === null, error ?? undefined);
    if (error) this.metrics.paymentsTotal.inc({ product: 'unknown', outcome: 'precheckout_rejected' });
  }

  async handleSuccessfulPayment(from: TgUser, sp: TgSuccessfulPayment): Promise<void> {
    const duplicate = await this.prisma.payment.findUnique({ where: { telegramPaymentChargeId: sp.telegram_payment_charge_id } });
    if (duplicate) return;

    const original = await this.prisma.payment.findUnique({ where: { id: sp.invoice_payload } });
    if (!original) {
      this.logger.error(`successful_payment for unknown payload ${sp.invoice_payload} (charge ${sp.telegram_payment_charge_id})`);
      return;
    }
    const product = STAR_PRODUCTS[original.productId as StarProductId];
    const expiresAt = sp.subscription_expiration_date ? new Date(sp.subscription_expiration_date * 1000) : null;
    const isRenewal = Boolean(sp.is_recurring && !sp.is_first_recurring && original.status !== 'PENDING');

    await this.prisma.$transaction(async (tx) => {
      let payment: Payment;
      if (isRenewal) {
        payment = await tx.payment.create({
          data: {
            userId: original.userId,
            productId: original.productId,
            amount: sp.total_amount,
            status: 'PAID',
            invoicePayload: original.invoicePayload,
            telegramPaymentChargeId: sp.telegram_payment_charge_id,
            providerPaymentChargeId: sp.provider_payment_charge_id,
            isRecurring: true,
            isFirstRecurring: false,
            subscriptionExpiresAt: expiresAt,
            subscriptionId: original.subscriptionId,
            raw: sp as unknown as Prisma.InputJsonObject,
            paidAt: new Date(),
          },
        });
      } else {
        payment = await tx.payment.update({
          where: { id: original.id },
          data: {
            status: 'PAID',
            amount: sp.total_amount,
            telegramPaymentChargeId: sp.telegram_payment_charge_id,
            providerPaymentChargeId: sp.provider_payment_charge_id,
            isRecurring: Boolean(sp.is_recurring),
            isFirstRecurring: Boolean(sp.is_first_recurring),
            subscriptionExpiresAt: expiresAt,
            raw: sp as unknown as Prisma.InputJsonObject,
            paidAt: new Date(),
          },
        });
      }
      await this.fulfil(tx, payment, product, original, expiresAt, isRenewal);
    });

    this.metrics.paymentsTotal.inc({ product: product.id, outcome: isRenewal ? 'renewal' : 'paid' });
    await this.queues.notify({
      userId: original.userId,
      text:
        product.kind === 'credits'
          ? `✅ ${product.credits} credits added. Thanks for supporting Mascot AI!`
          : isRenewal
            ? '✅ Premium renewed. Keep creating!'
            : '👑 Premium unlocked! Unlimited mascots, all styles, videos and HD export are now yours.',
      path: product.kind === 'credits' ? '/profile' : '/',
      buttonText: 'Open Mascot AI',
    });
    this.logger.log(`payment ${product.id} from tg:${from.id} fulfilled (renewal=${isRenewal})`);
  }

  private async fulfil(
    tx: Prisma.TransactionClient,
    payment: Payment,
    product: StarProduct,
    original: Payment,
    expiresAt: Date | null,
    _isRenewal: boolean,
  ): Promise<void> {
    if (product.kind === 'credits') {
      await this.quota.grantCredits(payment.userId, product.credits ?? 0, 'PURCHASE', { type: 'payment', id: payment.id }, tx);
      return;
    }
    const now = new Date();
    const user = await tx.user.findUniqueOrThrow({ where: { id: payment.userId }, select: { premiumUntil: true } });
    const base = user.premiumUntil && user.premiumUntil > now ? user.premiumUntil : now;

    if (product.kind === 'subscription') {
      const periodEnd = expiresAt ?? addDays(now, product.premiumDays ?? 30);
      const existing = original.subscriptionId ? await tx.subscription.findUnique({ where: { id: original.subscriptionId } }) : null;
      const subscription = existing
        ? await tx.subscription.update({
            where: { id: existing.id },
            data: { status: existing.cancelAtPeriodEnd ? 'CANCELED' : 'ACTIVE', currentPeriodStart: now, currentPeriodEnd: periodEnd },
          })
        : await tx.subscription.create({
            data: {
              userId: payment.userId,
              productId: product.id,
              status: 'ACTIVE',
              isRecurring: true,
              telegramChargeId: payment.telegramPaymentChargeId,
              currentPeriodStart: now,
              currentPeriodEnd: periodEnd,
            },
          });
      await tx.payment.update({ where: { id: payment.id }, data: { subscriptionId: subscription.id } });
    } else {
      const periodEnd = addDays(base, product.premiumDays ?? 365);
      const subscription = await tx.subscription.create({
        data: {
          userId: payment.userId,
          productId: product.id,
          status: 'ACTIVE',
          isRecurring: false,
          currentPeriodStart: now,
          currentPeriodEnd: periodEnd,
        },
      });
      await tx.payment.update({ where: { id: payment.id }, data: { subscriptionId: subscription.id } });
    }
    await this.recomputePremium(payment.userId, tx);
  }

  /** premium_until = latest end among live subscriptions (passes stack after subscriptions). */
  async recomputePremium(userId: string, tx: Prisma.TransactionClient = this.prisma): Promise<void> {
    const subs = await tx.subscription.findMany({
      where: { userId, status: { in: ['ACTIVE', 'CANCELED'] }, currentPeriodEnd: { gt: new Date() } },
      select: { currentPeriodEnd: true },
    });
    const until = subs.reduce<Date | null>((max, s) => (!max || s.currentPeriodEnd > max ? s.currentPeriodEnd : max), null);
    await tx.user.update({ where: { id: userId }, data: { premiumUntil: until, plan: until ? 'PREMIUM' : 'FREE' } });
  }

  async handleRefund(refund: TgRefundedPayment): Promise<void> {
    const payment = await this.prisma.payment.findUnique({ where: { telegramPaymentChargeId: refund.telegram_payment_charge_id } });
    if (!payment || payment.status === 'REFUNDED') return;
    await this.revoke(payment);
    const refunds = await this.prisma.payment.count({
      where: { userId: payment.userId, status: 'REFUNDED', refundedAt: { gte: addDays(new Date(), -90) } },
    });
    if (refunds >= 3) await this.abuse.record('PAYMENT_ABUSE', 'MEDIUM', payment.userId, { refundsLast90d: refunds });
  }

  private async revoke(payment: Payment): Promise<void> {
    const product = STAR_PRODUCTS[payment.productId as StarProductId];
    await this.prisma.$transaction(async (tx) => {
      await tx.payment.update({ where: { id: payment.id }, data: { status: 'REFUNDED', refundedAt: new Date() } });
      if (product.kind === 'credits') {
        const user = await tx.user.findUniqueOrThrow({ where: { id: payment.userId }, select: { credits: true } });
        const take = Math.min(user.credits, product.credits ?? 0);
        if (take > 0) {
          const updated = await tx.user.update({ where: { id: payment.userId }, data: { credits: { decrement: take } }, select: { credits: true } });
          await tx.creditLedger.create({
            data: { userId: payment.userId, delta: -take, balanceAfter: updated.credits, reason: 'REFUND', refType: 'payment', refId: payment.id },
          });
        }
      } else if (payment.subscriptionId) {
        await tx.subscription.update({ where: { id: payment.subscriptionId }, data: { status: 'EXPIRED', currentPeriodEnd: new Date() } });
        await this.recomputePremium(payment.userId, tx);
      }
    });
    this.metrics.paymentsTotal.inc({ product: payment.productId, outcome: 'refunded' });
  }

  /** Admin-initiated refund (support tickets via /paysupport). */
  async refund(paymentId: string, actorId: string): Promise<void> {
    const payment = await this.prisma.payment.findUnique({ where: { id: paymentId }, include: { user: true } });
    if (!payment) throw new NotFound('Payment');
    if (payment.status !== 'PAID' || !payment.telegramPaymentChargeId) throw new AppException('NOT_REFUNDABLE', 'Only paid payments can be refunded');
    await this.bot.refundStarPayment(Number(payment.user.telegramId), payment.telegramPaymentChargeId);
    await this.revoke(payment);
    await this.prisma.auditLog.create({ data: { actorId, action: 'payment.refund', targetType: 'payment', targetId: payment.id } });
  }

  private async activeRecurring(userId: string) {
    const sub = await this.prisma.subscription.findFirst({
      where: { userId, isRecurring: true, status: { in: ['ACTIVE', 'CANCELED'] }, currentPeriodEnd: { gt: new Date() } },
      include: { user: { select: { telegramId: true } } },
      orderBy: { currentPeriodEnd: 'desc' },
    });
    if (!sub?.telegramChargeId) throw new NotFound('Active subscription');
    return sub;
  }

  async cancelSubscription(userId: string): Promise<void> {
    const sub = await this.activeRecurring(userId);
    await this.bot.editUserStarSubscription(Number(sub.user.telegramId), sub.telegramChargeId!, true);
    await this.prisma.subscription.update({
      where: { id: sub.id },
      data: { status: 'CANCELED', cancelAtPeriodEnd: true, canceledAt: new Date() },
    });
  }

  async resumeSubscription(userId: string): Promise<void> {
    const sub = await this.activeRecurring(userId);
    await this.bot.editUserStarSubscription(Number(sub.user.telegramId), sub.telegramChargeId!, false);
    await this.prisma.subscription.update({ where: { id: sub.id }, data: { status: 'ACTIVE', cancelAtPeriodEnd: false, canceledAt: null } });
  }

  async history(userId: string) {
    const payments = await this.prisma.payment.findMany({
      where: { userId, status: { in: ['PAID', 'REFUNDED'] } },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
    return payments.map((p) => ({
      id: p.id,
      productId: p.productId,
      amount: p.amount,
      currency: p.currency,
      status: p.status,
      isRecurring: p.isRecurring,
      paidAt: p.paidAt?.toISOString() ?? null,
      refundedAt: p.refundedAt?.toISOString() ?? null,
    }));
  }

  /** Maintenance: expire subscriptions past their period (+ grace for pending renewals). */
  async expireSubscriptions(): Promise<number> {
    const now = Date.now();
    const due = await this.prisma.subscription.findMany({
      where: {
        status: { in: ['ACTIVE', 'CANCELED'] },
        OR: [
          { isRecurring: false, currentPeriodEnd: { lt: new Date(now) } },
          { isRecurring: true, cancelAtPeriodEnd: true, currentPeriodEnd: { lt: new Date(now) } },
          { isRecurring: true, cancelAtPeriodEnd: false, currentPeriodEnd: { lt: new Date(now - RENEWAL_GRACE_MS) } },
        ],
      },
      select: { id: true, userId: true },
      take: 1000,
    });
    for (const sub of due) {
      await this.prisma.subscription.update({ where: { id: sub.id }, data: { status: 'EXPIRED' } });
      await this.recomputePremium(sub.userId);
    }
    // Users whose denormalised premium_until lapsed without a subscription row change.
    await this.prisma.user.updateMany({ where: { plan: 'PREMIUM', premiumUntil: { lt: new Date() } }, data: { plan: 'FREE' } });
    return due.length;
  }

  async expirePendingPayments(): Promise<number> {
    const res = await this.prisma.payment.updateMany({
      where: { status: 'PENDING', createdAt: { lt: new Date(Date.now() - 24 * 3600_000) } },
      data: { status: 'EXPIRED' },
    });
    return res.count;
  }
}
