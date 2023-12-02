import { Controller, Post, Request } from '@nestjs/common';
import { NotifyService } from './noify.service';

@Controller('notify')
export class NotifyController {
  constructor(private readonly notifyService: NotifyService) {}
  @Post('line')
  async notify(@Request() request) {
    try {
      const notify = await this.notifyService.notifyLineChannel();
      return notify;
    } catch (error) {
      console.log(
        '🚀 ~ file: notify.controller.ts:14 ~ NotifyController ~ notify ~ error:',
        error,
      );
    }
  }
}
