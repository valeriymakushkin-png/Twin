import { Controller, Get, Query } from '@nestjs/common';
import type { LibraryDto } from '@mascot/shared';
import type { AuthContext } from '../../common/auth-context';
import { CurrentUser } from '../../common/decorators';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { DtoMapper } from './dto-mapper.service';

@Controller('library')
export class LibraryController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mapper: DtoMapper,
  ) {}

  /** Everything the user created, newest first (one round-trip for the Library tab). */
  @Get()
  async library(@CurrentUser() auth: AuthContext, @Query('avatarId') avatarId?: string): Promise<LibraryDto> {
    const where = { userId: auth.userId, ...(avatarId ? { avatarId } : {}) };
    const [packs, memes, pfps, videos] = await Promise.all([
      this.prisma.stickerPack.findMany({ where, include: { style: true, stickers: true }, orderBy: { createdAt: 'desc' }, take: 20 }),
      this.prisma.meme.findMany({ where, orderBy: { createdAt: 'desc' }, take: 30 }),
      this.prisma.profilePicture.findMany({ where, orderBy: { createdAt: 'desc' }, take: 30 }),
      this.prisma.video.findMany({ where, orderBy: { createdAt: 'desc' }, take: 20 }),
    ]);
    return {
      stickerPacks: packs.map((p) => this.mapper.stickerPack(p)),
      memes: memes.map((m) => this.mapper.meme(m)),
      profilePictures: pfps.map((p) => this.mapper.pfp(p)),
      videos: videos.map((v) => this.mapper.video(v)),
    };
  }
}
