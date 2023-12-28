import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('booking')
@Controller('booking')
export class BookingController {
  @Get()
  async getAllBookings() {
    return 'all';
  }

  @Get('get-booking-by-user-email/:email')
  async getBookingByUserEmail(@Param('email') email: string) {
    return 'by-email';
  }

  @Post('create')
  async createBooking(@Body() createBookingInput: any) {
    return 'create';
  }

  @Patch('update')
  async updateBooking(@Body() updateBookingInput: any) {}
}
