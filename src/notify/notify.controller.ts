import { Controller, Get, Post, Query, Request } from '@nestjs/common';
import { NotifyService } from './noify.service';
import { ApiTags } from '@nestjs/swagger';
import { CarDto } from './dto/notify.dto';
@ApiTags('Notify')
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

  @Get('test')
  async test(@Query() queryParams: CarDto): Promise<string> {
    console.log(
      '🚀 ~ file: notify.controller.ts:24 ~ NotifyController ~ test ~ queryParams:',
      queryParams,
    );
    return 'hello world';
  }
}