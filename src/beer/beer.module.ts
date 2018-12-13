import { Module } from '@nestjs/common';
import { BeerService } from './beer.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [BeerService],
  imports: [PrismaModule],
})
export class BeerModule {}
