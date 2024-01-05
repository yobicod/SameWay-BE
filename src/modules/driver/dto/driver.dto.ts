import { IsEmail, IsOptional, IsString } from 'class-validator';

export class DriverinfoDto {
  @IsString()
  id: string;

  @IsString()
  fullName: string;

  @IsString()
  plate: string;

  @IsString()
  carType: string;

  @IsString()
  gender: string;

  @IsString()
  phoneNumber: string;

  @IsEmail()
  userEmail: string;
}

export class UpdateDriverInfoDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  fullName?: string;

  @IsString()
  @IsOptional()
  plate?: string;

  @IsString()
  @IsOptional()
  carType?: string;

  @IsString()
  @IsOptional()
  gender?: string;

  @IsString()
  @IsOptional()
  phoneNumber?: string;
}
export class CreateDriverInfoDto {
  @IsEmail()
  userEmail: string;

  @IsString()
  fullName: string;

  @IsString()
  plate: string;

  @IsString()
  carType: string;

  @IsString()
  gender: string;

  @IsString()
  phoneNumber: string;
}

export class EnumCarTypesDto {
  @IsString()
  value: string;
  @IsString()
  description: string;
}
