import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
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
    JwtModule.register({
      secretOrPrivateKey: 'secret', // todo
      signOptions: {
        expiresIn: 3600, // 1hr
      },
    }),
  ],
  providers: [JwtStrategy, AuthService, AdminGuard],
  exports: [AuthService, AdminGuard],
})
export class AuthModule {}
