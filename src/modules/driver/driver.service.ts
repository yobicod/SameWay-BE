import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import {
  CreateDriverInfoDto,
  DriverinfoDto,
  UpdateDriverInfoDto,
} from './dto/driver.dto';
import { Domain } from 'src/constants/enum';

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
