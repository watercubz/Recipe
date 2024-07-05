import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Recipes API')
    .setDescription('Recipes API description')
    .setVersion('0.1')
    .build();

  //Create a Swagger document using the aplication and the documentacion configuraciton
  const document = SwaggerModule.createDocument(app, config);

  //setup Swagger module the aplkication instance and the Swagger document
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
