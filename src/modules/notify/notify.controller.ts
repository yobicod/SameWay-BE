import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { NotifyService } from './noify.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ICarDto, IEmergencyNotificationDto } from './dto/notify.dto';
@ApiTags('Notify')
@ApiBearerAuth()
@Controller('notify')
export class NotifyController {
  constructor(private readonly notifyService: NotifyService) {}
  @Post('line')
  async notify(@Body() emergencyInput: IEmergencyNotificationDto) {
    const isNotify = await this.notifyService.notifyLineChannel(emergencyInput);
    await this.notifyService.createNotificationLog(emergencyInput);
    return isNotify;
  }

  @Get('query')
  async query(@Query() queryParams: ICarDto): Promise<string> {
    console.log(
      '🚀 ~ file: notify.controller.ts:24 ~ NotifyController ~ test ~ queryParams:',
      queryParams,
    );
    return 'hello world';
  }

  @Get('body')
  async body(@Body() queryParams: ICarDto): Promise<string> {
    console.log(
      '🚀 ~ file: notify.controller.ts:24 ~ NotifyController ~ test ~ queryParams:',
      queryParams,
    );
    return 'hello world';
  }
}
