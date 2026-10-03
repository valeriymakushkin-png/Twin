import { HttpException, HttpStatus } from '@nestjs/common';
import type { PaywallReason, StarProductId } from '@mascot/shared';

/** Domain error with a stable machine-readable code. */
export class AppException extends HttpException {
  constructor(
    readonly code: string,
    message: string,
    status: HttpStatus = HttpStatus.BAD_REQUEST,
    readonly details?: unknown,
  ) {
    super({ code, message, details }, status);
  }
}

/** HTTP 402 carrying the paywall reason so the client can open the right upsell. */
export class PaywallException extends HttpException {
  constructor(
    readonly reason: PaywallReason,
    message: string,
    readonly suggestedProductId: StarProductId = 'premium_monthly',
  ) {
    super(
      { code: 'PAYWALL', message, paywall: { reason, suggestedProductId } },
      HttpStatus.PAYMENT_REQUIRED,
    );
  }
}

export class NotFound extends AppException {
  constructor(entity: string) {
    super('NOT_FOUND', `${entity} not found`, HttpStatus.NOT_FOUND);
  }
}

/**
 * Pipeline errors. `retryable=false` means the failure is caused by user input
 * (no face, inconsistent photos...) and must not be retried by BullMQ.
 */
export class PipelineError extends Error {
  constructor(
    readonly code: string,
    message: string,
    readonly retryable = false,
    readonly userMessage?: string,
  ) {
    super(message);
    this.name = 'PipelineError';
  }
}

export class ProviderError extends PipelineError {
  constructor(
    readonly provider: string,
    message: string,
    readonly status?: number,
    retryable = true,
  ) {
    super('PROVIDER_ERROR', `[${provider}] ${message}`, retryable, 'The AI provider is busy. We will retry automatically.');
    this.name = 'ProviderError';
  }
}
