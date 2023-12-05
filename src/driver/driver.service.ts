import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IDriverInfo } from './interfaces/driver';

@Injectable()
export class DriverService {
  constructor(private readonly prisma: PrismaService) {}
  public async getAllDrivers(): Promise<IDriverInfo[]> {
    try {
      const allDrivers = await this.prisma.driver.findMany();
      return allDrivers;
    } catch (error) {
      throw error;
    }
  }

  public async createDriver(req: IDriverInfo): Promise<boolean> {
    try {
      const createDriver = await this.prisma.driver.create({
        data: req,
      });
      if (!createDriver) return false;
      return true;
    } catch (error) {
      throw error;
    }
  }
}
