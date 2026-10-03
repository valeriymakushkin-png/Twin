import { Global, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { AppConfig } from '../../config/app-config';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { RateLimitGuard } from './rate-limit.guard';

@Global()
@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      global: true,
      inject: [AppConfig],
      useFactory: (config: AppConfig) => ({
        secret: config.JWT_SECRET,
        signOptions: { issuer: 'mascot-ai' },
        verifyOptions: { issuer: 'mascot-ai', audience: ['app', 'admin'] },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_GUARD, useClass: RateLimitGuard },
  ],
  exports: [AuthService],
})
export class AuthModule {}
