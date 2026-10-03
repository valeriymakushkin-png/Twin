import { Global, Module } from '@nestjs/common';
import { StyleCatalogService } from './style-catalog.service';
import { StylesController } from './styles.controller';

@Global()
@Module({
  controllers: [StylesController],
  providers: [StyleCatalogService],
  exports: [StyleCatalogService],
})
export class StylesModule {}
