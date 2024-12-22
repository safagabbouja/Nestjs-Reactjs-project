import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() { //fonction bech tconnectili server 3al port 3000
  const app = await NestFactory.create(AppModule); 
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
