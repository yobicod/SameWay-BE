import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookingService } from './booking.service';
@ApiTags('booking')
@Controller('booking')
export class BookingController {
  constructor(private bookingService: BookingService) {}
  @Get()
  async getAllBookings() {
    return this.bookingService.getAllBooking();
  }

  @Get('get-booking-by-user-email/:email')
  async getBookingByUserEmail(@Param('email') email: string) {
    return this.bookingService.getBookingByUserEmail(email);
  }

  @Post('create')
  async createBooking(@Body() createBookingInput: any) {
    return this.bookingService.createBooking(createBookingInput);
  }

  @Patch('update')
  async updateBooking(@Body() updateBookingInput: any) {
    return 'this method will implement after this';
  }
}
