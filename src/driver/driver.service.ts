import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IDriverInfo } from './interfaces/driver';

@Injectable()
export class DriverService {
  constructor(private readonly prisma: PrismaService) {}
  public async getAllDrivers(): Promise<IDriverInfo[]> {
    const allDrivers = await this.prisma.driver.findMany();
    return allDrivers;
  }
}
