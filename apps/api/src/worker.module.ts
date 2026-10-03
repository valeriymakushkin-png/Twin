import { Module } from '@nestjs/common';
import { CoreModule } from './core.module';
import { WorkersModule } from './workers/workers.module';

@Module({ imports: [CoreModule, WorkersModule] })
export class WorkerModule {}
