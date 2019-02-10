import { Module } from '@nestjs/common';
import { BeerTypeService } from './beer-type.service';
import { PrismaModule } from '../prisma/prisma.module';
import { ErrorModule } from '../error/error.module';
import { BeerTypeResolver } from './beer-type.resolver';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [BeerTypeService, BeerTypeResolver],
  imports: [PrismaModule, ErrorModule, AuthModule],
})
export class BeerTypeModule {}
