import { IsDate, IsEmail, IsOptional, IsString } from 'class-validator';

export class UserInfoDto {
  @IsString()
  id: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsString()
  role: string;
}

export class CreateUserInfoDto {
  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsString()
  role: string;
}

export class UpdateUserInfoDto {
  @IsString()
  @IsOptional()
  fullName?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  role?: string;
}
