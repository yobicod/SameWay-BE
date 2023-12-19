import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import {
  CreateDriverInfoDto,
  DriverinfoDto,
  UpdateDriverInfoDto,
} from './dto/driver.dto';

@Injectable()
export class DriverService {
  constructor(private readonly prisma: PrismaService) {}
  public async getAllDrivers(): Promise<DriverinfoDto[]> {
    try {
      const allDrivers = await this.prisma.driver.findMany();
      return allDrivers;
    } catch (error) {
      console.log(
        '🚀 ~ file: driver.service.ts:13 ~ DriverService ~ getAllDrivers ~ error:',
        error,
      );
      throw new InternalServerErrorException(error.message);
    }
  }

  public async getDriver(driverId: string): Promise<DriverinfoDto> {
    try {
      const driver = await this.prisma.driver.findUnique({
        where: {
          id: driverId,
        },
      });
      return driver;
    } catch (error) {
      console.log(
        '🚀 ~ file: driver.service.ts:26 ~ DriverService ~ getDriver ~ error:',
        error,
      );
      throw new InternalServerErrorException(error.message);
    }
  }

  public async createDriver(
    createDriverInput: CreateDriverInfoDto,
  ): Promise<boolean> {
    try {
      await this.prisma.driver.create({
        data: { ...createDriverInput },
      });
      return true;
    } catch (error) {
      console.log(
        '🚀 ~ file: driver.service.ts:41 ~ DriverService ~ createDriver ~ error:',
        error,
      );
      throw new InternalServerErrorException(error, error.message);
    }
  }

  public async updateDriver(
    updateDriverInput: UpdateDriverInfoDto,
  ): Promise<boolean> {
    try {
      await this.prisma.driver.update({
        where: {
          id: updateDriverInput.id,
        },
        data: {
          carType: updateDriverInput.carType || undefined,
          driverFirstName: updateDriverInput.driverFirstName || undefined,
          driverLastName: updateDriverInput.driverLastName || undefined,
          phoneNumber: updateDriverInput.phoneNumber || undefined,
          plate: updateDriverInput.plate || undefined,
          sex: updateDriverInput.sex || undefined,
        },
      });
      return true;
    } catch (error) {
      console.log(
        '🚀 ~ file: driver.service.ts:66 ~ DriverService ~ updateDriver ~ error:',
        error,
      );
      throw new InternalServerErrorException(error.message);
    }
  }
}
