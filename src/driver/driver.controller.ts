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
    const allDrivers = await this.driverService.getAllDrivers();
    return allDrivers;
  }

  @Post()
  async createDriver(@Body() driverInput: IDriverInfoDto): Promise<boolean> {
    console.log(
      '🚀 ~ file: driver.controller.ts:19 ~ DriverController ~ createDriver ~ driverInput:',
      driverInput,
    );
    const isCreated = await this.driverService.createDriver(driverInput);
    if (!isCreated) return false;
    return true;
  }
}
