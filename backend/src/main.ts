import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ ВКЛЮЧАЕМ CORS
  app.enableCors({
    origin: 'http://localhost:3000', // Разрешаем фронту доступ
    credentials: true,
  });

  await app.listen(8000);
}
bootstrap();
