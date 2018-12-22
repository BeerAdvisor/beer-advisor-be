import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.use(cookieParser())
  await app.listen(3000);
}
bootstrap();
