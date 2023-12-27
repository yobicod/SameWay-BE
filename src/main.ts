import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*:*',
    methods: 'GET, PUT, POST, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });

  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Your API')
    .setDescription('API description')
    .setVersion('1.0')
    .addBearerAuth() // Add bearer token authentication to Swagger
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  console.log('server runnning at port 3001');
  await app.listen(3001);
}
bootstrap();

// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { ValidationPipe } from '@nestjs/common';
// import * as http from 'http';
// import * as socketio from 'socket.io';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   app.enableCors({
//     origin: '*',
//     methods: '*',
//     allowedHeaders: 'Content-Type, Authorization',
//   });

//   const httpServer = app.getHttpServer();
//   const io = new socketio.Server(httpServer, {
//     cors: {
//       origin: '*:*',
//       methods: '*',
//       allowedHeaders: '*',
//     },
//   });

//   io.on('connection', (socket) => {
//     console.log('Client connected:', socket.id);

//     socket.on('disconnect', () => {
//       console.log('Client disconnected:', socket.id);
//     });
//   });

//   app.useGlobalPipes(new ValidationPipe());

//   const config = new DocumentBuilder()
//     .setTitle('Your API')
//     .setDescription('API description')
//     .setVersion('1.0')
//     .addBearerAuth() // Add bearer token authentication to Swagger
//     .build();

//   const document = SwaggerModule.createDocument(app, config);
//   SwaggerModule.setup('api', app, document);

//   console.log('Server running at port 3001');

//   await app.listen(3001);
// }

// bootstrap();
