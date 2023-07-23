import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1');
  const port = process.env.PORT || 8080;

  await app.listen(port);
  logger.verbose(`\nThe application is running on port ${port}\nE DEH RUSH!!`);
}

bootstrap();
