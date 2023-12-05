import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { DriverService } from './driver.service';
import { ApiTags } from '@nestjs/swagger';
import { IDriverCreateInfoDto, IDriverUpdateInfoDto } from './dto/driver.dto';

@ApiTags('driver')
@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}
  @Get()
  async getAllDrivers(): Promise<IDriverCreateInfoDto[]> {
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
  async createDriver(
    @Body() driverInput: IDriverCreateInfoDto,
  ): Promise<boolean> {
    const isCreated = await this.driverService.createDriver(driverInput);

    return isCreated;
  }

  @Patch()
  async editDriver(
    @Body() driverInput: IDriverUpdateInfoDto,
  ): Promise<boolean> {
    const isUpdated = await this.driverService.updateDriver(driverInput);
    return isUpdated;
  }
}
