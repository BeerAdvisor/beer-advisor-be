import { Module } from '@nestjs/common';
import { BeerService } from './beer.service';
import { PrismaModule } from '../prisma/prisma.module';
import { BeerResolvers } from './beer.resolver';

@Module({
  providers: [BeerService, BeerResolvers],
  imports: [PrismaModule],
})
export class BeerModule {}
