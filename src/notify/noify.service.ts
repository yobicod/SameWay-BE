import { Injectable } from '@nestjs/common';
import { LINE_NOTIFY_TEST_TOKEN } from './constants/noti';
@Injectable()
export class NotifyService {
  public async notifyLineChannel(): Promise<boolean> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const lineNotify = require('line-notify-nodejs')(LINE_NOTIFY_TEST_TOKEN);
      let isNoti = true;
      lineNotify
        .notify({
          message: '\nHello World',
        })
        .then(() => {
          console.log('send completed');
        })
        .catch((error) => {
          isNoti = false;
          console.log(`error while push noti : ${error}`);
        });
      if (isNoti) return true;
      return false;
    } catch (error) {
      throw error;
    }
  }
}
