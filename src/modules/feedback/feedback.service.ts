import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FeedbackService {
  constructor(private readonly prisma: PrismaService) {}

  public async getAllFeedBack(): Promise<any> {
    return await this.prisma.feedback.findMany();
  }

  public async getFeedbackByUserEmail(email: string) {
    return await this.prisma.feedback.findMany({
      where: {
        userId: email, // fix schema here
      },
    });
  }

  public async createFeedBack(createFeedBackInput: any): Promise<boolean> {
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
