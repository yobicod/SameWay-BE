import {
  CreateDriverInfoDto,
  DriverinfoDto,
  EnumCarTypesDto,
  UpdateDriverInfoDto,
} from '../dto/driver.dto';

export interface IDriverServiceInterface {
  getAllDrivers(): Promise<DriverinfoDto[]>;
  createDriver(driverInput: CreateDriverInfoDto): Promise<boolean>;
  // editDriver(driverInput: UpdateDriverInfoDto): Promise<boolean>;
  checkIsDriverInSystem(email: string): Promise<boolean>;
  getDriverInfoByUserEmail(email: string): Promise<DriverinfoDto>;
  getEnumCarTypes(): Promise<EnumCarTypesDto[]>;
}
