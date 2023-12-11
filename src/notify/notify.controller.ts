import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { NotifyService } from './noify.service';
import { ApiTags } from '@nestjs/swagger';
import { CarDto, EmergencyNotification } from './dto/notify.dto';
@ApiTags('Notify')
@Controller('notify')
export class NotifyController {
  constructor(private readonly notifyService: NotifyService) {}
  @Post('line')
  async notify(@Body() emergencyInput: EmergencyNotification) {
    const isNotify = await this.notifyService.notifyLineChannel(emergencyInput);
    await this.notifyService.createNotificationLog(emergencyInput);
    return isNotify;
  }

  @Get('query')
  async query(@Query() queryParams: CarDto): Promise<string> {
    console.log(
      '🚀 ~ file: notify.controller.ts:24 ~ NotifyController ~ test ~ queryParams:',
      queryParams,
    );
    return 'hello world';
  }

  @Get('body')
  async body(@Body() queryParams: CarDto): Promise<string> {
    console.log(
      '🚀 ~ file: notify.controller.ts:24 ~ NotifyController ~ test ~ queryParams:',
      queryParams,
    );
    return 'hello world';
  }
}
