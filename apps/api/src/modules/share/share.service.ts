import { Injectable, Logger } from '@nestjs/common';
import type { PrepareShareInput, PrepareShareResponseDto } from '@mascot/shared';
import { AppConfig } from '../../config/app-config';
import { AppException, NotFound } from '../../common/errors';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { StorageKeys, StorageService } from '../../infra/storage/storage.service';
import { TelegramBotService } from '../telegram/telegram-bot.service';

/**
 * Viral sharing. Every shared asset carries a deep link with the sharer's referral code,
 * so new users who tap "Make my own mascot" are attributed and both sides get credits.
 */
@Injectable()
export class ShareService {
  private readonly logger = new Logger(ShareService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
    private readonly bot: TelegramBotService,
    private readonly config: AppConfig,
  ) {}

  private async resolveMedia(userId: string, input: PrepareShareInput): Promise<{ mediaUrl: string; caption: string; shareSlug?: string }> {
    switch (input.kind) {
      case 'avatar': {
        const avatar = await this.prisma.avatar.findFirst({ where: { id: input.id, userId, status: 'READY', deletedAt: null } });
        if (!avatar?.primaryRenderId) throw new NotFound('Mascot');
        return {
          mediaUrl: this.storage.publicUrl(StorageKeys.renderShare(avatar.id, avatar.primaryRenderId))!,
          caption: `Meet ${avatar.name} — my AI mascot ✨`,
          shareSlug: avatar.shareSlug,
        };
      }
      case 'meme': {
        const meme = await this.prisma.meme.findFirst({ where: { id: input.id, userId, status: 'READY' } });
        if (!meme?.imageKey) throw new NotFound('Meme');
        return { mediaUrl: this.storage.publicUrl(meme.imageKey)!, caption: 'Made with Mascot AI 😂' };
      }
      case 'pfp': {
        const pfp = await this.prisma.profilePicture.findFirst({ where: { id: input.id, userId, status: 'READY' } });
        if (!pfp?.imageKey) throw new NotFound('Profile picture');
        return { mediaUrl: this.storage.publicUrl(pfp.imageKey)!, caption: 'My new profile picture ✨' };
      }
      case 'sticker_pack': {
        const pack = await this.prisma.stickerPack.findFirst({ where: { id: input.id, userId }, include: { stickers: { where: { status: 'READY' }, take: 1 } } });
        if (!pack) throw new NotFound('Sticker pack');
        if (!pack.telegramSetName) throw new AppException('PACK_NOT_PUBLISHED', 'Add the pack to Telegram first.');
        return { mediaUrl: `https://t.me/addstickers/${pack.telegramSetName}`, caption: `My mascot sticker pack: https://t.me/addstickers/${pack.telegramSetName}` };
      }
      case 'video': {
        const video = await this.prisma.video.findFirst({ where: { id: input.id, userId, status: 'READY' } });
        if (!video?.videoKey) throw new NotFound('Video');
        return { mediaUrl: this.storage.publicUrl(video.videoKey)!, caption: 'My mascot in motion 🎬' };
      }
    }
  }

  async prepare(userId: string, input: PrepareShareInput): Promise<PrepareShareResponseDto> {
    const user = await this.prisma.user.findUniqueOrThrow({ where: { id: userId }, select: { telegramId: true, referralCode: true } });
    const { mediaUrl, caption, shareSlug } = await this.resolveMedia(userId, input);
    const startParam = [`ref_${user.referralCode}`, shareSlug ? `m_${shareSlug}` : 'src_share'].join('__');
    const shareUrl = this.config.deepLink(startParam);

    let preparedMessageId: string | null = null;
    if (input.kind === 'avatar' || input.kind === 'meme' || input.kind === 'pfp') {
      try {
        const prepared = await this.bot.savePreparedInlineMessage(Number(user.telegramId), {
          type: 'photo',
          id: `${input.kind}_${input.id}`.slice(0, 64),
          photo_url: mediaUrl,
          thumbnail_url: mediaUrl,
          caption,
          reply_markup: { inline_keyboard: [[{ text: '✨ Make my own mascot', url: shareUrl }]] },
        });
        preparedMessageId = prepared.id;
      } catch (error) {
        this.logger.warn(`savePreparedInlineMessage failed: ${(error as Error).message}`);
      }
    }
    return { preparedMessageId, shareUrl, mediaUrl };
  }
}
