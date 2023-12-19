import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FeedbackService } from './feedback.service';
@ApiTags('feedback')
@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}
  @Get('')
  async getAllFeedBack() {
    return await this.feedbackService.getAllFeedBack();
  }

  @Post('create')
  async createFeedback(createFeedBackInput: any) {
    return await this.feedbackService.createFeedBack(createFeedBackInput);
  }
}
