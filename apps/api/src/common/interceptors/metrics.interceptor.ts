import { Injectable, type CallHandler, type ExecutionContext, type NestInterceptor } from '@nestjs/common';
import type { Response } from 'express';
import { Observable, tap } from 'rxjs';
import { MetricsService } from '../../infra/metrics/metrics.service';
import type { AppRequest } from '../auth-context';

/** Records request latency per route template (not raw path → bounded cardinality). */
@Injectable()
export class MetricsInterceptor implements NestInterceptor {
  constructor(private readonly metrics: MetricsService) {}

  intercept(ctx: ExecutionContext, next: CallHandler): Observable<unknown> {
    if (ctx.getType() !== 'http') return next.handle();
    const req = ctx.switchToHttp().getRequest<AppRequest>();
    const res = ctx.switchToHttp().getResponse<Response>();
    const end = this.metrics.httpDuration.startTimer();
    const route = (req.route as { path?: string } | undefined)?.path ?? 'unknown';
    const done = () => end({ method: req.method, route, status: String(res.statusCode) });
    return next.handle().pipe(tap({ next: done, error: () => end({ method: req.method, route, status: 'error' }) }));
  }
}
