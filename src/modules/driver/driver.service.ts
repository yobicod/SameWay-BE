import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import {
  CreateDriverInfoDto,
  DriverinfoDto,
  EnumCarTypesDto,
  UpdateDriverInfoDto,
} from './dto/driver.dto';
import { Domain } from 'src/constants/enum';
import { IDriverServiceInterface } from './interfaces/driver.service.interface';

@Injectable()
export class DriverService implements IDriverServiceInterface {
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

  public async getEnumCarTypes(): Promise<EnumCarTypesDto[]> {
    try {
      const allCartypes = await this.prisma.enumCarType.findMany();
      return allCartypes;
    } catch (error) {
      console.log(
        '🚀 ~ file: driver.service.ts:33 ~ DriverService ~ getEnumCarTyeps ~ error:',
        error,
      );
      throw new InternalServerErrorException(error.message);
    }
  }

  public async getDriverInfoByUserEmail(email: string): Promise<DriverinfoDto> {
    const kmitlDomain = (email += Domain.kmitl);
    const googleDomain = (email += Domain.google);
    try {
      const driverInfo = await this.prisma.driver.findFirst({
        where: {
          OR: [
            {
              userEmail: kmitlDomain,
            },
            {
              userEmail: googleDomain,
            },
          ],
        },
      });
      if (driverInfo) {
        return driverInfo;
      } else {
        throw new InternalServerErrorException(
          'This user is not driver in system',
        );
      }
    } catch (error) {
      console.log(
        '🚀 ~ file: driver.service.ts:30 ~ DriverService ~ getDriverInfoByUserEmail ~ error:',
        error,
      );

      throw new InternalServerErrorException(error.message);
    }
  }

  public async checkIsDriverInSystem(email: string): Promise<boolean> {
    try {
      const driver = await this.prisma.driver.findFirst({
        where: {
          OR: [
            {
              userEmail: email + Domain.kmitl,
            },
            {
              userEmail: email + Domain.google,
            },
          ],
        },
      });
      if (!driver) return false;
      return true;
    } catch (error) {
      console.log(
        '🚀 ~ file: driver.service.ts:29 ~ DriverService ~ checkIsDriverInSystem ~ error:',
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
          userEmail: updateDriverInput.email,
        },
        data: {
          carType: updateDriverInput.carType || undefined,
          fullName: updateDriverInput.fullName || undefined,
          phoneNumber: updateDriverInput.phoneNumber || undefined,
          plate: updateDriverInput.plate || undefined,
          gender: updateDriverInput.gender || undefined,
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
