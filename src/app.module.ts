import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';



@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}













// @Module({
//   imports: [
//     ClientsModule.register([
//       {
//         name:'First_MicroService',
//         transport: Transport.KAFKA,
//         options:{
//           client:{
//             clientId: 'user',
//             brokers: ['localhost:9092']
//           },
//           consumer: {
//             groupId: '2micro_consumer'
//           }
//         }
//     }
//   ])
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
