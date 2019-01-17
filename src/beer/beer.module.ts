import { Module } from '@nestjs/common';
import { BeerService } from './beer.service';
import { PrismaModule } from '../prisma/prisma.module';
import { BeerResolvers } from './beer.resolver';
import { ErrorModule } from '../error/error.module';

@Module({
  providers: [BeerService, BeerResolvers],
  imports: [PrismaModule, ErrorModule],
})
export class BeerModule {}
