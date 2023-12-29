import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { HttpStatusCode } from 'axios';
import { Domain } from 'src/constants/enum';
import { IBookingService } from './interfaces/booking.service.interface';
import { BookingDto, GetBookingDto } from './dto/booking.dto';

@Injectable()
export class BookingService implements IBookingService {
  constructor(private readonly prisma: PrismaService) {}
  public async getAllBooking(): Promise<BookingDto[]> {
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

  public async getBookingByUserEmail(email: string): Promise<GetBookingDto> {
    const domainKmitl = (email += Domain.kmitl);
    const domainGoogle = (email += Domain.google);
    try {
      const userSpecificBooking = await this.prisma.booking.findMany({
        where: {
          OR: [
            {
              userEmail: domainKmitl,
            },
            {
              userEmail: domainGoogle,
            },
          ],
        },
      });

      const driverSpecificBooking = await this.prisma.booking.findMany({
        where: {
          OR: [
            {
              driverEmail: domainKmitl,
            },
            {
              driverEmail: domainGoogle,
            },
          ],
        },
      });

      if (userSpecificBooking && driverSpecificBooking) {
        return {
          user: userSpecificBooking,
          driver: driverSpecificBooking,
        };
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
