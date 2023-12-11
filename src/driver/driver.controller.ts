import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { DriverService } from './driver.service';
import { ApiTags } from '@nestjs/swagger';
import {
  IDriverinfoDto,
  IDriverId,
  IDriverUpdateInfoDto,
} from './dto/driver.dto';
import { IDriverServiceInterface } from './interfaces/dirver.service.interface';

@ApiTags('driver')
@Controller('driver')
export class DriverController implements IDriverServiceInterface {
  constructor(private readonly driverService: DriverService) {}
  @Get()
  async getAllDrivers(): Promise<IDriverinfoDto[]> {
    try {
      const allDrivers = await this.driverService.getAllDrivers();
      return allDrivers;
    } catch (error) {
      console.log(
        '🚀 ~ file: driver.controller.ts:16 ~ DriverController ~ getAllDrivers ~ error:',
        error,
      );
    }
  }
  @Get('get-driver-by-id')
  async getDriver(
    @Query() queryParamsDriverId: IDriverId,
  ): Promise<IDriverinfoDto> {
    try {
      const driver = await this.driverService.getDriver(queryParamsDriverId.id);
      return driver;
    } catch (error) {
      console.log(
        '🚀 ~ file: driver.controller.ts:28 ~ DriverController ~ getDriver ~ error:',
        error,
      );
    }
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
