import { Body, Controller, Delete, Get, HttpCode, Param, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { UPLOAD_RULES } from '@mascot/shared';
import type { AuthContext } from '../../common/auth-context';
import { CurrentUser, RateLimit } from '../../common/decorators';
import { UploadsService, type IncomingFile } from './uploads.service';

const ACCEPTED = new Set<string>([...UPLOAD_RULES.acceptedMime, 'application/octet-stream']);

@Controller()
export class UploadsController {
  constructor(private readonly uploads: UploadsService) {}

  /**
   * POST /upload — multipart/form-data, field "photos" (1..20 files), optional field consent=true.
   */
  @Post('upload')
  @RateLimit({ key: 'upload', limit: 40, windowSec: 3600 })
  @UseInterceptors(
    FilesInterceptor('photos', UPLOAD_RULES.maxPhotos, {
      limits: { fileSize: UPLOAD_RULES.maxFileBytes, files: UPLOAD_RULES.maxPhotos, fields: 5 },
      fileFilter: (_req, file, cb) => cb(null, ACCEPTED.has(file.mimetype)),
    }),
  )
  upload(
    @CurrentUser() auth: AuthContext,
    @UploadedFiles() files: IncomingFile[] | undefined,
    @Body('consent') consent?: string,
  ) {
    return this.uploads.upload(auth.userId, files ?? [], consent === 'true' || consent === '1');
  }

  @Get('photos')
  list(@CurrentUser() auth: AuthContext) {
    return this.uploads.listRecent(auth.userId);
  }

  @Delete('photos/:id')
  @HttpCode(204)
  async remove(@CurrentUser() auth: AuthContext, @Param('id') id: string) {
    await this.uploads.remove(auth.userId, id);
  }
}
