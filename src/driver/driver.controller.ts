import { Body, Controller, Get, Post } from '@nestjs/common';
import { DriverService } from './driver.service';
import { ApiTags } from '@nestjs/swagger';
import { IDriverInfo } from './interfaces/driver';
import { IDriverInfoDto } from './dto/driver.dto';

@ApiTags('driver')
@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}
  @Get()
  async getAllDrivers(): Promise<IDriverInfo[]> {
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

  @Post()
  async createDriver(@Body() driverInput: IDriverInfoDto): Promise<boolean> {
    try {
      const isCreated = await this.driverService.createDriver(driverInput);
      if (!isCreated) return false;
      return true;
    } catch (error) {
      console.log(
        '🚀 ~ file: driver.controller.ts:29 ~ DriverController ~ createDriver ~ error:',
        error,
      );
    }
  }
}
