import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IEmergencyNotificationDto } from './dto/notify.dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { INotifyService } from './interfaces/notify.interface';

@Injectable()
export class NotifyService implements INotifyService {
  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {}
  public async notifyLineChannel(
    req: IEmergencyNotificationDto,
  ): Promise<boolean> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const lineNotify = require('line-notify-nodejs')(
        this.configService.get('LINE_NOTIFY_TEST_TOKEN'),
      );

      lineNotify.notify({
        message: `เหตุด่วนเหตุร้ายมาแร้วจ้า 💀💀 \nผู้โดยสาร: ${req.passengerName} \nคนขับ: ${req.driverName} \nข้อความ: ${req.message}`,
      });

      return true;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
  public async createNotificationLog(
    req: IEmergencyNotificationDto,
  ): Promise<boolean> {
    try {
      await this.prisma.emergency.create({
        data: {
          ...req,
        },
      });
      return true;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
