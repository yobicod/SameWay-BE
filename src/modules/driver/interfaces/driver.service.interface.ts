import {
  CreateDriverInfoDto,
  DriverinfoDto,
  UpdateDriverInfoDto,
} from '../dto/driver.dto';

export interface IDriverServiceInterface {
  getAllDrivers(): Promise<DriverinfoDto[]>;
  createDriver(driverInput: CreateDriverInfoDto): Promise<boolean>;
  editDriver(driverInput: UpdateDriverInfoDto): Promise<boolean>;
  checkIsDriverInSystem(email: string): Promise<boolean>;
}
