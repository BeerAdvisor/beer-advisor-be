import { Module } from '@nestjs/common';
import { BarResolver } from './bar.resolver';
import { BarService } from './bar.service';

@Module({
  providers: [BarResolver, BarService],
})
export class BarModule {}
