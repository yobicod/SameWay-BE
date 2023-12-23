import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IReportService } from './interfaces/report.interface';

@Injectable()
export class ReportService implements IReportService {
  constructor(private readonly prisma: PrismaService) {}
  public async getAllReports(): Promise<any> {
    try {
      return await this.prisma.feedback.findMany();
    } catch (error) {
      console.log(
        '🚀 ~ file: report.service.ts:9 ~ ReportService ~ getAllFeedBacks ~ error:',
        error,
      );
      throw new InternalServerErrorException(error.message);
    }
  }

  public async createReport(createReportInput: any): Promise<boolean> {
    try {
      await this.prisma.report.create({ data: { ...createReportInput } });
      return true;
    } catch (error) {
      console.log(
        '🚀 ~ file: report.service.ts:23 ~ ReportService ~ createReport ~ error:',
        error,
      );
      throw new InternalServerErrorException(error.message);
    }
  }
}
