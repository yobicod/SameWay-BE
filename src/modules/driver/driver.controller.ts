import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { DriverService } from './driver.service';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateDriverInfoDto,
  DriverId,
  DriverinfoDto,
  UpdateDriverInfoDto,
} from './dto/driver.dto';
import { IDriverServiceInterface } from './interfaces/driver.service.interface';
import { RolesGuard } from '../auth/role.guard';

@ApiTags('driver')
@Controller('driver')
export class DriverController implements IDriverServiceInterface {
  constructor(private readonly driverService: DriverService) {}
  @Get()
  @UseGuards(new RolesGuard())
  async getAllDrivers(): Promise<DriverinfoDto[]> {
    const allDrivers = await this.driverService.getAllDrivers();
    return allDrivers;
  }
  @Get('get-driver-by-id')
  async getDriver(
    @Query() queryParamsDriverId: DriverId,
  ): Promise<DriverinfoDto> {
    const driver = await this.driverService.getDriver(queryParamsDriverId.id);
    return driver;
  }
  @Post('create')
  async createDriver(
    @Body()
    createDriverInput: CreateDriverInfoDto,
  ): Promise<boolean> {
    const isCreated = await this.driverService.createDriver(createDriverInput);
    return isCreated;
  }

  @Patch('edit')
  async editDriver(
    @Body() updateDriverInput: UpdateDriverInfoDto,
  ): Promise<boolean> {
    const isUpdated = await this.driverService.updateDriver(updateDriverInput);
    return isUpdated;
  }
}
