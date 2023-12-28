export interface IBookingService {
  getAllBooking(): Promise<any>;
  getBookingByUserEmail(email: string): Promise<any>;
  createBooking(createBookingInput: any): Promise<boolean>;
}
