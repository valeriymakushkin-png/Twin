import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { GENERATION_TYPES, type GenerationType } from '@mascot/shared';
import type { AuthContext } from '../../common/auth-context';
import { CurrentUser } from '../../common/decorators';
import { GenerationsService } from './generations.service';

@Controller('generations')
export class GenerationsController {
  constructor(private readonly generations: GenerationsService) {}

  @Get()
  list(@CurrentUser() auth: AuthContext, @Query('type') type?: string, @Query('limit') limit?: string) {
    const t = GENERATION_TYPES.includes(type as GenerationType) ? (type as GenerationType) : undefined;
    return this.generations.list(auth.userId, t, Number(limit) || 20);
  }

  /** Polled by the processing screen (stage + progress + queue position). */
  @Get(':id')
  get(@CurrentUser() auth: AuthContext, @Param('id') id: string) {
    return this.generations.get(auth.userId, id);
  }

  @Post(':id/cancel')
  cancel(@CurrentUser() auth: AuthContext, @Param('id') id: string) {
    return this.generations.cancel(auth.userId, id);
  }
}
