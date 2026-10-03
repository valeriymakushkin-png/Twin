import { Global, Module } from '@nestjs/common';
import { DtoMapper } from './dto-mapper.service';
import { LibraryController } from './library.controller';

@Global()
@Module({
  controllers: [LibraryController],
  providers: [DtoMapper],
  exports: [DtoMapper],
})
export class LibraryModule {}
