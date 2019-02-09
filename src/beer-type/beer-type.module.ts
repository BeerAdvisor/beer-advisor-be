import { Module } from '@nestjs/common';
import { BeerTypeService } from './beer-type.service';
import { PrismaModule } from '../prisma/prisma.module';
import { ErrorModule } from '../error/error.module';
import { BeerTypeResolver } from './beer-type.resolver';

@Module({
  providers: [BeerTypeService, BeerTypeResolver],
  imports: [PrismaModule, ErrorModule],
})
export class BeerTypeModule {}
