import { Controller, Logger } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  RmqContext,
  Payload,
} from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'hello' })
  getHello(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log(data);
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    channel.ack(originalMsg);
  }
}
