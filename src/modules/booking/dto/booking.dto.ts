import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  userFullName: string;

  @IsEmail()
  userEmail: string;

  @IsString()
  userStart: string;

  @IsString()
  userDestination: string;

  userLat: number;

  userLong: number;

  @IsString()
  userCreateAt: string;

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
  driverCreateAt: string;

  @IsString()
  driverGender: string;

  @IsString()
  deliverType: string;

  @IsString()
  createdAt: string;

  @IsString()
  updatedAt: string;

  @IsString()
  carType: string;

  @IsNumber()
  capacity: string;

  @IsString()
  plate: string;
}
