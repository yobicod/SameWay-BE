import { IsDate, IsEmail, IsNumber, IsString } from 'class-validator';

export class BookingDto {
  @IsString()
  userFullName: string;

  @IsEmail()
  userEmail: string;

  @IsString()
  userStart: string;

  @IsString()
  userDestination: string;

  @IsNumber()
  userLat: number;

  @IsNumber()
  userLong: number;

  @IsDate()
  userCreateAt: Date;

  @IsString()
  driverFullName: string;

  @IsEmail()
  driverEmail: string;

  @IsString()
  driverStart: string;

  @IsString()
  driverDestination: string;

  @IsNumber()
  driverLat: number;

  @IsNumber()
  driverLong: number;

  @IsDate()
  driverCreateAt: Date;

  @IsString()
  driverGender: string;

  @IsString()
  deliverType: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsString()
  carType: string;

  @IsNumber()
  capacity: number;

  @IsString()
  plate: string;
}

export class GetBookingDto {
  user: BookingDto[];
  driver: BookingDto[];
}
export class CreateBookingDto {
  @IsString()
  userFullName: string;

  @IsEmail()
  userEmail: string;

  @IsString()
  userStart: string;

  @IsString()
  userDestination: string;

  @IsNumber()
  userLat: number;

  @IsNumber()
  userLong: number;

  @IsString()
  userCreateAt: Date;

  @IsString()
  driverFullName: string;

  @IsEmail()
  driverEmail: string;

  @IsString()
  driverStart: string;

  @IsString()
  driverDestination: string;

  @IsNumber()
  driverLat: number;

  @IsNumber()
  driverLong: number;

  @IsString()
  driverCreateAt: Date;

  @IsString()
  driverGender: string;

  @IsString()
  deliverType: string;

  @IsNumber()
  price: number;

  @IsString()
  createdAt: Date;

  @IsString()
  updatedAt: Date;

  @IsString()
  carType: string;

  @IsNumber()
  capacity: number;

  @IsString()
  plate: string;
}
