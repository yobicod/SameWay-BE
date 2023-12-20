import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateFeedBackDto {
  @IsEmail()
  driverEmail: string;

  @IsEmail()
  userEmail: string;

  @IsNumber()
  ratingScore: number;

  @IsString()
  description: string;
}
