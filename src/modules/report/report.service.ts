import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReportService {
  constructor(private readonly prisma: PrismaService) {}
  public async getAllFeedBacks(): Promise<any> {
    try {
      return await this.prisma.feedback;
    } catch (error) {
      console.log(
        '🚀 ~ file: report.service.ts:9 ~ ReportService ~ getAllFeedBacks ~ error:',
        error,
      );
    }
  }
}
