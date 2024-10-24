import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api/'); // po stronie serwera bedzie sie zaczynac od tego, zeby nie bylo konfliktow

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, //conversion of types
      whitelist: true,  //remove properties not present in DTO
      forbidNonWhitelisted: true,
    })
  );
  app.use(cookieParser()); // do plikow cookie, aby zapamietywac logowanie etc.

  app.enableCors({
    origin: 'http://localhost:5173', //jezeli wiecej originow, to umieszczam je w tablicy stringow
    credentials: true, //pozwala na przetworzenie plikow cookies, mechanizm autoryzacji nie bedzie dzialal prawidlowo
  })

  await app.listen(process.env.PORT ?? 9000);
}
bootstrap();
