import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('====================================');
  console.log(process.env.MONGODB_URI);
  console.log('====================================');
  await app.listen(5000);
}
bootstrap();
