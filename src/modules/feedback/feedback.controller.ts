import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FeedbackService } from './feedback.service';
import { CreateFeedBackDto } from './dto/feedback.dto';
import { IFeedbackService } from './interfaces/feedback.interface';
@ApiTags('feedback')
@Controller('feedback')
export class FeedbackController implements IFeedbackService {
  constructor(private readonly feedbackService: FeedbackService) {}
  @Get('')
  async getAllFeedBack() {
    return await this.feedbackService.getAllFeedBack();
  }

  @Get('enum-problems')
  async getEnumProblems() {
    return await this.feedbackService.getEnumProblems();
  }

  @Post('create')
  async createFeedback(
    @Body() createFeedBackInput: CreateFeedBackDto,
  ): Promise<boolean> {
    return await this.feedbackService.createFeedback(createFeedBackInput);
  }
}
