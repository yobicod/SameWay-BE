import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IDriverCreateInfoDto, IDriverUpdateInfoDto } from './dto/driver.dto';

@Injectable()
export class DriverService {
  constructor(private readonly prisma: PrismaService) {}
  public async getAllDrivers(): Promise<IDriverCreateInfoDto[]> {
    try {
      const allDrivers = await this.prisma.driver.findMany();
      return allDrivers;
    } catch (error) {
      console.log(
        '🚀 ~ file: driver.service.ts:13 ~ DriverService ~ getAllDrivers ~ error:',
        error,
      );
      throw error;
    }
  }

  public async getDriver(driverId: string) {
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
      throw new InternalServerErrorException(error);
    }
  }

  public async createDriver(req: IDriverCreateInfoDto): Promise<boolean> {
    try {
      await this.prisma.driver.create({
        data: req,
      });
      return true;
    } catch (error) {
      console.log(
        '🚀 ~ file: driver.service.ts:41 ~ DriverService ~ createDriver ~ error:',
        error,
      );
      throw new InternalServerErrorException(error);
    }
  }

  public async updateDriver(req: IDriverUpdateInfoDto): Promise<boolean> {
    try {
      await this.prisma.driver.update({
        where: {
          id: req.id,
        },
        data: {
          carType: req.carType && undefined,
          driverFirstName: req.driverFirstName,
          driverLastName: req.driverLastName,
          phoneNumber: req.phoneNumber,
          plate: req.plate,
          sex: req.sex,
        },
      });
      return true;
    } catch (error) {
      console.log(
        '🚀 ~ file: driver.service.ts:66 ~ DriverService ~ updateDriver ~ error:',
        error,
      );
      throw new InternalServerErrorException(error);
    }
  }
}
