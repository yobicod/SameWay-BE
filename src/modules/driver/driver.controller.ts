import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { DriverService } from './driver.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  CreateDriverInfoDto,
  DriverId,
  DriverinfoDto,
  UpdateDriverInfoDto,
} from './dto/driver.dto';
import { IDriverServiceInterface } from './interfaces/driver.service.interface';
import { RolesGuard } from '../guard/role.guard';
import { Roles } from '../guard/role.decorator';
import { ROLE } from 'src/constants/enum';

@ApiTags('driver')
@ApiBearerAuth()
@Controller('driver')
export class DriverController implements IDriverServiceInterface {
  constructor(private readonly driverService: DriverService) {}
  @Get()
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
