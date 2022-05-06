import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka, EventPattern } from '@nestjs/microservices';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
