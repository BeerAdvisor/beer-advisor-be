import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.enableCors({
    credentials: true,
    origin: true,
  });
  app.use(cookieParser());
  const port = process.env.PORT || 8080;
  await app.listen(port);
  console.log('Server started at port', port, '🚀');
}
bootstrap();
