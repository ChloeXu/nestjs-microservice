import { Controller, Logger } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  NatsContext,
  Payload,
} from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'hello' })
  getHello(@Payload() data: any, @Ctx() context: NatsContext): string {
    this.logger.log(`Received message: ${JSON.stringify(data)}`);
    this.logger.log(`Message context: ${JSON.stringify(context)}`);
    return `Hello, ${data.name || 'there'}`;
  }
}
