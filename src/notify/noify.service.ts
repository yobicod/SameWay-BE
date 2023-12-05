import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class NotifyService {
  constructor(private readonly configService: ConfigService) {}
  public async notifyLineChannel(): Promise<boolean> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const lineNotify = require('line-notify-nodejs')(
        this.configService.get('LINE_NOTIFY_TEST_TOKEN'),
      );

      lineNotify.notify({
        message: '\nHello World',
      });

      return true;
    } catch (error) {
      throw error;
    }
  }
}
