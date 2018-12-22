import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UserResolver } from './user.resolver';
import { ErrorModule } from '../error/error.module';

@Module({
  providers: [UserService, UserResolver],
  imports: [PrismaModule, ErrorModule],
})
export class UserModule {}
