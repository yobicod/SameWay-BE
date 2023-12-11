import {
  IDriverCreateInfoDto,
  IDriverId,
  IDriverUpdateInfoDto,
} from '../dto/driver.dto';

export interface IDriverServiceInterface {
  getAllDrivers(): Promise<IDriverCreateInfoDto[]>;
  getDriver(queryParamsDriverId: IDriverId);
  createDriver(driverInput: IDriverCreateInfoDto): Promise<boolean>;
  editDriver(driverInput: IDriverUpdateInfoDto): Promise<boolean>;
}
