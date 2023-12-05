import { Controller, Get } from '@nestjs/common';
import { DriverService } from './driver.service';
import { ApiTags } from '@nestjs/swagger';
import { IDriverInfo } from './interfaces/driver';

@ApiTags('driver')
@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}
  @Get()
  async getAllDrivers(): Promise<IDriverInfo[]> {
    const allDrivers = await this.driverService.getAllDrivers();
    return allDrivers;
  }
}
