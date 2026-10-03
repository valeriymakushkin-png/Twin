import { Controller, ForbiddenException, Get, NotFoundException, Param, Query, Res } from '@nestjs/common';
import type { Response } from 'express';
import { Public } from '../../common/decorators';
import { safeEqualHex } from '../../common/utils/crypto';
import { StorageService } from './storage.service';
import type { Bucket } from './storage.types';

/** Serves files for STORAGE_DRIVER=local. In production R2 + CDN serve files directly. */
@Controller('files')
export class LocalFilesController {
  constructor(private readonly storage: StorageService) {}

  @Public()
  @Get(':bucket/*path')
  async serve(
    @Param('bucket') bucket: string,
    @Param('path') pathParam: string | string[],
    @Query('exp') exp: string | undefined,
    @Query('sig') sig: string | undefined,
    @Res() res: Response,
  ): Promise<void> {
    const local = this.storage.local;
    if (!local || (bucket !== 'public' && bucket !== 'private')) throw new NotFoundException();
    const key = Array.isArray(pathParam) ? pathParam.join('/') : pathParam;
    if (bucket === 'private') {
      const expiry = Number(exp);
      if (!sig || !Number.isFinite(expiry) || expiry < Date.now() / 1000) throw new ForbiddenException('URL expired');
      if (!safeEqualHex(sig, local.sign(key, expiry))) throw new ForbiddenException('Bad signature');
    }
    if (!(await local.exists(bucket as Bucket, key))) throw new NotFoundException();
    res.setHeader('Content-Type', await local.contentType(bucket as Bucket, key));
    res.setHeader('Cache-Control', bucket === 'public' ? 'public, max-age=31536000, immutable' : 'private, no-store');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
    res.send(await local.get(bucket as Bucket, key));
  }
}
