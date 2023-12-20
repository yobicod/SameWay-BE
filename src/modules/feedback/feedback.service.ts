import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFeedBackDto } from './dto/feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(private readonly prisma: PrismaService) {}

  public async getAllFeedBack(): Promise<any> {
    try {
      return await this.prisma.feedback.findMany();
    } catch (error) {
      console.log(
        '🚀 ~ file: feedback.service.ts:12 ~ FeedbackService ~ getAllFeedBack ~ error:',
        error,
      );
      throw new InternalServerErrorException(error.message);
    }
  }

  public async getFeedbackByUserEmail(email: string) {
    try {
      return await this.prisma.feedback.findMany({
        where: {
          userEmail: email,
        },
      });
    } catch (error) {
      console.log(
        '🚀 ~ file: feedback.service.ts:23 ~ FeedbackService ~ getFeedbackByUserEmail ~ error:',
        error,
      );
      throw new InternalServerErrorException(error.message);
    }
  }

  public async getEnumProblems() {
    try {
      return await this.prisma.enumProblem.findMany();
    } catch (error) {
      console.log(
        '🚀 ~ file: feedback.service.ts:40 ~ FeedbackService ~ getEnumProblems ~ error:',
        error,
      );
      throw new InternalServerErrorException(error.message);
    }
  }

  public async getFeedbackByDriverEmai(driverEmail: string) {
    try {
      return await this.prisma.feedback.findMany({
        where: {
          driverEmail,
        },
      });
    } catch (error) {
      console.log(
        '🚀 ~ file: feedback.service.ts:40 ~ FeedbackService ~ getFeedbackByDriverEmai ~ error:',
        error,
      );
      throw new InternalServerErrorException(error.message);
    }
  }

  public async createFeedback(
    createFeedBackInput: CreateFeedBackDto,
  ): Promise<boolean> {
    try {
      await this.prisma.feedback.create({
        data: {
          ...createFeedBackInput,
        },
      });
      return true;
    } catch (error) {
      console.log(
        '🚀 ~ file: feedback.service.ts:24 ~ FeedbackService ~ createFeedBack ~ error:',
        error,
      );
      throw new InternalServerErrorException(error.message);
    }
  }
}
