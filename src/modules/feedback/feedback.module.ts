import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { PrismaModule } from '../prisma/prisma.module';
import { FeedbackController } from './feedback.controller';

@Module({
  imports: [PrismaModule],
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class FeedbackModule {}
