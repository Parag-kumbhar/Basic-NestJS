// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.enableCors();

//   await app.listen(process.env.PORT ?? 5000);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // Serve static files from uploads folder
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  await app.listen(5000);
}
bootstrap();
