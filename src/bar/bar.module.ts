import { Module } from '@nestjs/common';
import { BarResolver } from './bar.resolver';
import { BarService } from './bar.service';
import { PrismaModule } from '../prisma/prisma.module';
import { ErrorModule } from '../error/error.module';
import { FourSquareModule } from '../fourSquare/fourSquare.module';

@Module({
  providers: [BarResolver, BarService],
  imports: [PrismaModule, ErrorModule, FourSquareModule],
})
export class BarModule {}
