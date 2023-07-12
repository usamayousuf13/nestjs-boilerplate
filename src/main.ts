import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  // app.useLogger(app.get(Logger));
  await app.listen(process.env.APP_PORT || 3001);
  console.log(`App started on port ${process.env.APP_PORT}`);
}
bootstrap();
