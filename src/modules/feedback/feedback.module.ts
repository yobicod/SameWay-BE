import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { PrismaModule } from '../prisma/prisma.module';
import { FeedbackController } from './feedback.controller';

@Module({})
export class FeedbackModule {
  imports: [PrismaModule];
  controller: [FeedbackController];
  provider: [FeedbackService];
}
