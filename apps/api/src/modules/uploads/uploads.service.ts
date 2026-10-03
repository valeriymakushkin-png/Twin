import { HttpStatus, Inject, Injectable, Logger } from '@nestjs/common';
import type { Photo, Prisma } from '@prisma/client';
import { UPLOAD_RULES, type PhotoDto, type UploadResponseDto } from '@mascot/shared';
import { AppException, PipelineError } from '../../common/errors';
import { mapLimit } from '../../common/utils/async';
import { sha256Hex } from '../../common/utils/crypto';
import { createId } from '../../common/utils/id';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { StorageKeys, StorageService } from '../../infra/storage/storage.service';
import { classifyPose, FACE_ANALYZER, type FaceAnalysis, type FaceAnalyzer } from '../../ai/face/face.types';
import { dHash, imageQuality, normalizeUpload } from '../../ai/render/image-ops';
import { AbuseService } from '../moderation/abuse.service';
import { ModerationService } from '../moderation/moderation.service';

export interface IncomingFile {
  originalname: string;
  mimetype: string;
  size: number;
  buffer: Buffer;
}

/** Age under which uploads are rejected outright (Telegram ToS 13+, our ToS 16+ for paid features). */
const MIN_AGE = 13;

@Injectable()
export class UploadsService {
  private readonly logger = new Logger(UploadsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
    private readonly moderation: ModerationService,
    private readonly abuse: AbuseService,
    @Inject(FACE_ANALYZER) private readonly faces: FaceAnalyzer,
  ) {}

  async toDto(photo: Photo): Promise<PhotoDto> {
    return {
      id: photo.id,
      url: await this.storage.signedUrl(photo.storageKey),
      width: photo.width,
      height: photo.height,
      pose: photo.pose,
      status: photo.status,
      rejectReason: photo.rejectReason,
      qualityScore: photo.qualityScore,
    };
  }

  /**
   * POST /upload pipeline per file:
   *  normalise (EXIF orient, strip metadata, ≤1600px JPEG) → quality metrics → dedupe (sha256 + dHash)
   *  → NSFW moderation → store in the PRIVATE bucket → face analysis for instant feedback
   *  (face count, pose, age gate). Photos the face service cannot analyse stay UPLOADED and
   *  are re-analysed by the avatar pipeline.
   */
  async upload(userId: string, files: IncomingFile[], consent: boolean): Promise<UploadResponseDto> {
    if (!files.length) throw new AppException('NO_FILES', 'Attach at least one photo (field "photos").');
    const user = await this.prisma.user.findUniqueOrThrow({ where: { id: userId }, select: { biometricConsentAt: true } });
    if (!user.biometricConsentAt) {
      if (!consent) {
        throw new AppException('CONSENT_REQUIRED', 'Please accept face-data processing to create your mascot.', HttpStatus.PRECONDITION_REQUIRED);
      }
      await this.prisma.user.update({ where: { id: userId }, data: { biometricConsentAt: new Date() } });
    }
    const recent = await this.prisma.photo.count({ where: { userId, createdAt: { gte: new Date(Date.now() - 24 * 3600_000) } } });
    if (recent + files.length > UPLOAD_RULES.maxPhotos * 5) {
      throw new AppException('UPLOAD_LIMIT', 'Daily upload limit reached. Try again tomorrow.', HttpStatus.TOO_MANY_REQUESTS);
    }

    const rejected: UploadResponseDto['rejected'] = [];
    const prepared = await mapLimit(files, 4, async (file) => {
      try {
        if (file.size > UPLOAD_RULES.maxFileBytes) throw new PipelineError('FILE_TOO_LARGE', 'too large', false, 'Photo is larger than 15 MB.');
        const sha256 = sha256Hex(file.buffer);
        const normalized = await normalizeUpload(file.buffer, UPLOAD_RULES.minDimension);
        const [quality, phash, verdict] = await Promise.all([
          imageQuality(normalized.jpeg),
          dHash(normalized.jpeg),
          this.moderation.checkImage(normalized.jpeg),
        ]);
        if (verdict.flagged) {
          await this.abuse.record('NSFW_UPLOAD', verdict.critical ? 'CRITICAL' : 'HIGH', userId, { categories: verdict.categories, sha256 });
          throw new PipelineError('POLICY', 'flagged', false, 'This photo violates our content policy.');
        }
        return { file, sha256, normalized, quality, phash };
      } catch (error) {
        rejected.push({ fileName: file.originalname, reason: error instanceof PipelineError ? (error.userMessage ?? error.message) : 'Could not process this file.' });
        return null;
      }
    });

    const accepted = prepared.filter((p): p is NonNullable<typeof p> => p !== null);
    const existing = await this.prisma.photo.findMany({
      where: { userId, sha256: { in: accepted.map((a) => a.sha256) } },
    });
    const existingBySha = new Map(existing.map((p) => [p.sha256, p]));

    const created: Photo[] = [];
    const fileNames = new Map<string, string>();
    const seen = new Set<string>();
    const fresh = accepted.filter((a) => {
      const dup = existingBySha.get(a.sha256);
      if (dup && !seen.has(a.sha256)) {
        created.push(dup);
        fileNames.set(dup.id, a.file.originalname);
      }
      if (dup || seen.has(a.sha256)) {
        if (!dup) rejected.push({ fileName: a.file.originalname, reason: 'Duplicate photo.' });
        seen.add(a.sha256);
        return false;
      }
      seen.add(a.sha256);
      return true;
    });

    // Face analysis on the normalised bytes (batched) for immediate per-photo feedback.
    const ids = fresh.map(() => createId());
    let analyses = new Map<string, FaceAnalysis>();
    try {
      analyses = await this.faces.analyze(fresh.map((f, i) => ({ id: ids[i]!, data: f.normalized.jpeg, subject: userId })));
    } catch (error) {
      this.logger.warn(`upload-time face analysis unavailable: ${(error as Error).message}`);
    }

    for (const [i, item] of fresh.entries()) {
      const id = ids[i]!;
      const analysis = analyses.get(id);
      let status: Photo['status'] = 'UPLOADED';
      let rejectReason: string | null = null;
      if (analysis) {
        if (analysis.faceCount === 0) rejectReason = 'No face detected. Make sure your face is clearly visible.';
        else if (analysis.faceCount > 1) rejectReason = 'Multiple faces detected. Use photos with only you in them.';
        else if (analysis.quality.faceAreaRatio < 0.02) rejectReason = 'Your face is too small in this photo. Move closer.';
        else if (item.quality.brightness < 0.12) rejectReason = 'Photo is too dark.';
        else if (item.quality.sharpness < 12) rejectReason = 'Photo is too blurry.';
        status = rejectReason ? 'REJECTED' : 'ACCEPTED';
        if (analysis.age !== null && analysis.age < MIN_AGE) {
          await this.abuse.record('MINOR_DETECTED', 'HIGH', userId, { estimatedAge: analysis.age, photoId: id });
          status = 'REJECTED';
          rejectReason = 'Mascot AI is available for ages 16+.';
        }
      }
      fileNames.set(id, item.file.originalname);
      const key = StorageKeys.photo(userId, id);
      await this.storage.putPrivate(key, item.normalized.jpeg, 'image/jpeg');
      created.push(
        await this.prisma.photo.create({
          data: {
            id,
            userId,
            storageKey: key,
            mimeType: 'image/jpeg',
            width: item.normalized.width,
            height: item.normalized.height,
            sizeBytes: item.normalized.jpeg.length,
            sha256: item.sha256,
            phash: item.phash,
            status,
            rejectReason,
            pose: analysis ? classifyPose(analysis) : 'OTHER',
            qualityScore: item.quality.score,
            faceCount: analysis?.faceCount ?? null,
            analysis: analysis ? (analysis as unknown as Prisma.InputJsonObject) : undefined,
          },
        }),
      );
    }

    if (rejected.length >= 5 && created.length === 0) {
      await this.abuse.record('NO_FACE_SPAM', 'LOW', userId, { rejected: rejected.length });
    }
    return {
      photos: await Promise.all(created.map(async (p) => ({ ...(await this.toDto(p)), fileName: fileNames.get(p.id) }))),
      rejected,
    };
  }

  async listRecent(userId: string): Promise<PhotoDto[]> {
    const photos = await this.prisma.photo.findMany({
      where: { userId, avatarId: null, createdAt: { gte: new Date(Date.now() - 7 * 24 * 3600_000) } },
      orderBy: { createdAt: 'desc' },
      take: UPLOAD_RULES.maxPhotos * 2,
    });
    return Promise.all(photos.map((p) => this.toDto(p)));
  }

  async remove(userId: string, photoId: string): Promise<void> {
    const photo = await this.prisma.photo.findFirst({ where: { id: photoId, userId } });
    if (!photo) return;
    await this.storage.delete('private', [photo.storageKey]);
    await this.prisma.photo.delete({ where: { id: photo.id } });
  }
}
