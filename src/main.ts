import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'my-kafka-consumer',
      }
    }
  });

  app.listen()
}
bootstrap();









//listener
// async function bootstrap() {
//     const app = await NestFactory.createMicroservice<MicroserviceOptions>(
//       AppModule,
//       {
//         transport: Transport.KAFKA,
//         options:{
//           client:{
//             brokers:['localhost:9092'],
//           },
//           consumer:{
//             groupId:'2micro_consumer'
//           }
//         }
//     })
  
//     await app.listen();
// }
// bootstrap()
