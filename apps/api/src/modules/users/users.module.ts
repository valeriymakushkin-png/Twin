import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ActivityService],
  exports: [UsersService, ActivityService],
})
export class UsersModule {}
