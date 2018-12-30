import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UserResolver } from './user.resolver';
import { ErrorModule } from '../error/error.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [UserService, UserResolver],
  imports: [AuthModule, PrismaModule, ErrorModule],
  exports: [UserService],
})
export class UserModule {}
