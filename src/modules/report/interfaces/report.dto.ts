import { IsEmail, IsString } from 'class-validator';

export class CreateReportDto {
  @IsString()
  problemType: string;
  @IsString()
  description: string;
  @IsEmail()
  userEmail: string;
  @IsEmail()
  driverEmail: string;
}
