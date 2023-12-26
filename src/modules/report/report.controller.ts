import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ReportService } from './report.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { CreateReportDto } from './interfaces/report.dto';

@ApiTags('report')
@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}
  @Get()
  async getAllReports(): Promise<any> {
    const allReports = await this.reportService.getAllReports();
    return allReports;
  }

  @Post('create')
  async createReport(
    @Body() createReportInput: CreateReportDto,
  ): Promise<boolean> {
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
