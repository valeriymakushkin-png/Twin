import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CreateInvoiceSchema, type CreateInvoiceInput } from '@mascot/shared';
import type { AuthContext } from '../../common/auth-context';
import { CurrentUser, Public, RateLimit } from '../../common/decorators';
import { ZodPipe } from '../../common/pipes/zod.pipe';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly payments: PaymentsService) {}

  @Public()
  @Get('products')
  products() {
    return this.payments.products();
  }

  /** Returns a Telegram Stars invoice link for WebApp.openInvoice(). */
  @Post('invoice')
  @RateLimit({ key: 'invoice', limit: 20, windowSec: 600 })
  invoice(@CurrentUser() auth: AuthContext, @Body(new ZodPipe(CreateInvoiceSchema)) body: CreateInvoiceInput) {
    return this.payments.createInvoice(auth.userId, body.productId);
  }

  @Get()
  history(@CurrentUser() auth: AuthContext) {
    return this.payments.history(auth.userId);
  }

  @Post('subscription/cancel')
  @HttpCode(200)
  async cancel(@CurrentUser() auth: AuthContext) {
    await this.payments.cancelSubscription(auth.userId);
    return { status: 'canceled' };
  }

  @Post('subscription/resume')
  @HttpCode(200)
  async resume(@CurrentUser() auth: AuthContext) {
    await this.payments.resumeSubscription(auth.userId);
    return { status: 'active' };
  }
}
