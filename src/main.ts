import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API для школы')
    .setDescription(
      'Сервис для учительского состава, позволяющий удобно администрировать учебный процесс',
    )
    .setVersion('1.0.0')
    .addTag('school-api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () =>
    console.log(`Сервер успешно стартанул на ${PORT} порту!`),
  );
}

bootstrap();
