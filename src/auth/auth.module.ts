import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { PrismaModule } from '../prisma/prisma.module';
import { ErrorModule } from '../error/error.module';
import { AdminGuard } from './admin.guard';

@Module({
  imports: [
    PrismaModule,
    ErrorModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
  ],
  providers: [JwtStrategy, AuthService, AdminGuard],
  exports: [AuthService, AdminGuard],
})
export class AuthModule {}
