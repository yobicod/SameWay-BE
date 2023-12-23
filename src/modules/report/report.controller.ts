import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ReportService } from './report.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}
  @Get()
  async getAllReports(): Promise<any> {
    const allReports = await this.reportService.getAllReports();
    return allReports;
  }

  @Post('create')
  @UseInterceptors(FileInterceptor('file'))
  async createReport(
    createReportInput: any,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<boolean> {
    console.log(
      '🚀 ~ file: report.controller.ts:26 ~ ReportController ~ file:',
      file,
    );
    return await this.reportService.createReport(createReportInput);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFileToS3(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<boolean> {
    console.log(
      '🚀 ~ file: report.controller.ts:38 ~ ReportController ~ file:',
      file,
    );
    // call service to store file in s3 then take url and store in db
    return true;
  }
}
