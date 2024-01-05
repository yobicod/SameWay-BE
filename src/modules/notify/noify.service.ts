import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IEmergencyNotificationDto } from './dto/notify.dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { INotifyService } from './interfaces/notify.interface';

import axios from 'axios';

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

      // mock url based on req body lat lng
      const url = 'http://maps.google.com/maps?z=8&t=m&q=loc:13.7024+100.6985';

      const tinyUrl = await axios.get(`${process.env.TINY_URL}${url}`, {
        params: {
          muteHttpExceptions: true,
        },
      });

      const shorterUrl = tinyUrl.data;
      await lineNotify.notify({
        message: `เเจ้งเหตุฉุกเฉิน🚨  \nผู้โดยสาร: ${req.passengerName} \nคนขับ: ${req.driverName} \nข้อความ: ${req.message} \nสถานที่: ${shorterUrl}
        `,
      });

      return true;
    } catch (error) {
      console.log(
        '🚀 ~ file: noify.service.ts:28 ~ NotifyService ~ error:',
        error,
      );
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
