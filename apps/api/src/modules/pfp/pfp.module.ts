import { Module } from '@nestjs/common';
import { PfpController } from './pfp.controller';
import { PfpService } from './pfp.service';

@Module({
  controllers: [PfpController],
  providers: [PfpService],
})
export class PfpModule {}
