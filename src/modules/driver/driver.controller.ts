import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { DriverService } from './driver.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  CreateDriverInfoDto,
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
export class DriverController {
  constructor(private readonly driverService: DriverService) {}
  @Get()
  async getAllDrivers(): Promise<DriverinfoDto[]> {
    const allDrivers = await this.driverService.getAllDrivers();
    return allDrivers;
  }
  @Get('get-driver-info-by-user-email/:email')
  async getDriverByUserEmail(
    @Param('email') email: string,
  ): Promise<DriverinfoDto> {
    const driverInfo = await this.driverService.getDriverInfoByUserEmail(email);
    return driverInfo;
  }

  @Get('is-driver-in-system/:email')
  async checkIsDriverInSystem(@Param('email') email: string): Promise<boolean> {
    const isDriverInSystem =
      await this.driverService.checkIsDriverInSystem(email);
    return isDriverInSystem;
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
