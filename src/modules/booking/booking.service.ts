import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import e from 'express';
import { HttpStatusCode } from 'axios';

@Injectable()
export class BookingService {
  constructor(private readonly prisma: PrismaService) {}
  public async getAllBooking(): Promise<any> {
    try {
      const booking = await this.prisma.booking.findMany();
      if (booking) {
        return booking;
      }
    } catch (error) {
      console.log(
        '🚀 ~ file: booking.service.ts:11 ~ BookingService ~ getAllBooking ~ error:',
        error,
      );
      throw new InternalServerErrorException(error.message);
    }
  }

  public async getBookingByUserEmail(email: string): Promise<any> {
    try {
      const specificBooking = await this.prisma.booking.findMany({
        where: {
          userEmail: email,
        },
      });
      if (specificBooking) {
        return specificBooking;
      }
    } catch (error) {
      console.log(
        '🚀 ~ file: booking.service.ts:23 ~ BookingService ~ getBookingByUserEmail ~ error:',
        error,
      );
      throw new InternalServerErrorException(error.message);
    }
  }

  public async createBooking(createBookingInput: any): Promise<boolean> {
    try {
      await this.prisma.booking.create({
        data: {
          ...createBookingInput,
        },
      });
      return true;
    } catch (error) {
      console.log(
        '🚀 ~ file: booking.service.ts:47 ~ BookingService ~ createBooking ~ error:',
        error,
      );
      throw new InternalServerErrorException({
        stausCode: HttpStatusCode.InternalServerError,
        error: error.message,
      });
    }
  }
}
