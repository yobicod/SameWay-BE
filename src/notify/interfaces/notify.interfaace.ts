import { EmergencyNotification } from '../dto/notify.dto';

export interface INotifyService {
  notifyLineChannel(req: EmergencyNotification): Promise<boolean>;
  createNotificationLog(req: EmergencyNotification): Promise<boolean>;
}
