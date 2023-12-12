import { IEmergencyNotificationDto } from '../dto/notify.dto';

export interface INotifyService {
  notifyLineChannel(req: IEmergencyNotificationDto): Promise<boolean>;
  createNotificationLog(req: IEmergencyNotificationDto): Promise<boolean>;
}
