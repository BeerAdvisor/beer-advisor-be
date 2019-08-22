import { Module } from '@nestjs/common';
import { FourSquareService } from './fourSquare.service';
import { ErrorModule } from '../error/error.module';

@Module({
  providers: [FourSquareService],
  exports: [FourSquareService],
  imports: [ErrorModule],
})
export class FourSquareModule {}
