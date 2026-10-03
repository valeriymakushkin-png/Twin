import {
  Catch,
  HttpException,
  HttpStatus,
  Logger,
  type ArgumentsHost,
  type ExceptionFilter,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import type { Response } from 'express';
import type { ApiError } from '@mascot/shared';
import type { AppRequest } from '../auth-context';

/** Normalises every error into the ApiError contract consumed by the clients. */
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger('HTTP');

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<AppRequest>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let body: ApiError = {
      statusCode: status,
      error: 'Internal Server Error',
      message: 'Something went wrong. Please try again.',
      code: 'INTERNAL',
    };

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const response = exception.getResponse();
      const payload = typeof response === 'string' ? { message: response } : (response as Record<string, unknown>);
      const rawMessage = payload.message;
      body = {
        statusCode: status,
        error: HttpStatus[status] ?? 'Error',
        message: Array.isArray(rawMessage) ? rawMessage.join('; ') : String(rawMessage ?? exception.message),
        code: (payload.code as string | undefined) ?? HttpStatus[status],
        ...(payload.paywall ? { paywall: payload.paywall as ApiError['paywall'] } : {}),
        ...(payload.details !== undefined ? { details: payload.details } : {}),
      };
    } else if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      if (exception.code === 'P2002') {
        status = HttpStatus.CONFLICT;
        body = { statusCode: status, error: 'Conflict', message: 'Resource already exists', code: 'CONFLICT' };
      } else if (exception.code === 'P2025') {
        status = HttpStatus.NOT_FOUND;
        body = { statusCode: status, error: 'Not Found', message: 'Resource not found', code: 'NOT_FOUND' };
      }
    }

    if (status >= 500) {
      this.logger.error(
        { err: exception, path: req.url, requestId: req.requestId },
        exception instanceof Error ? exception.message : 'Unhandled exception',
      );
    }

    body.requestId = req.requestId ?? (req as unknown as { id?: string }).id;
    res.status(status).json(body);
  }
}
