import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { Client, ClientKafka, EventPattern, Payload, Transport } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @EventPattern('my-first-topic') // Our topic name
  getHello(@Payload() message) {
    console.log(message.value);
    return 'Hello World';
  }
}























// export class AppController implements OnModuleInit {
//   constructor(
//     private readonly appService: AppService,
//     @Inject('First_MicroService') private readonly firstMicro: ClientKafka,
//   ) {}
 
//     @EventPattern('topic_name')
//     getHello(@Payload() message){
//       console.log(message.value)
//     return 'hello world'
//   }

  
//   onModuleInit() { //check ths
//     this.firstMicro.subscribeToResponseOf('get_user')
//   }
// }
