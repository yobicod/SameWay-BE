import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { DriverService } from './driver.service';
import { ApiTags } from '@nestjs/swagger';
import {
  IDriverinfoDto,
  IDriverId,
  IDriverUpdateInfoDto,
} from './dto/driver.dto';
import { IDriverServiceInterface } from './interfaces/driver.service.interface';

@ApiTags('driver')
@Controller('driver')
export class DriverController implements IDriverServiceInterface {
  constructor(private readonly driverService: DriverService) {}
  @Get()
  async getAllDrivers(): Promise<IDriverinfoDto[]> {
    const allDrivers = await this.driverService.getAllDrivers();
    return allDrivers;
  }
  @Get('get-driver-by-id')
  async getDriver(
    @Query() queryParamsDriverId: IDriverId,
  ): Promise<IDriverinfoDto> {
    const driver = await this.driverService.getDriver(queryParamsDriverId.id);
    return driver;
  }
  @Post('create')
  async createDriver(@Body() driverInput: IDriverinfoDto): Promise<boolean> {
    const isCreated = await this.driverService.createDriver(driverInput);
    return isCreated;
  }

  @Patch('edit')
  async editDriver(
    @Body() driverInput: IDriverUpdateInfoDto,
  ): Promise<boolean> {
    const isUpdated = await this.driverService.updateDriver(driverInput);
    return isUpdated;
  }
}
