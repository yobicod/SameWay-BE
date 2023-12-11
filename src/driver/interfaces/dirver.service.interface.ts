import {
  IDriverId,
  IDriverUpdateInfoDto,
  IDriverinfoDto,
} from '../dto/driver.dto';

export interface IDriverServiceInterface {
  getAllDrivers(): Promise<IDriverinfoDto[]>;
  getDriver(queryParamsDriverId: IDriverId);
  createDriver(driverInput: IDriverinfoDto): Promise<boolean>;
  editDriver(driverInput: IDriverUpdateInfoDto): Promise<boolean>;
}
