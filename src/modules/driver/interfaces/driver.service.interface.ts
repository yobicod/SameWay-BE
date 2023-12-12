import {
  CreateDriverInfoDto,
  DriverId,
  DriverinfoDto,
  UpdateDriverInfoDto,
} from '../dto/driver.dto';

export interface IDriverServiceInterface {
  getAllDrivers(): Promise<DriverinfoDto[]>;
  getDriver(queryParamsDriverId: DriverId);
  createDriver(driverInput: CreateDriverInfoDto): Promise<boolean>;
  editDriver(driverInput: UpdateDriverInfoDto): Promise<boolean>;
}
