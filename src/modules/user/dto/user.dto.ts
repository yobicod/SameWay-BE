import { IsDate, IsOptional, IsString } from 'class-validator';

export class UserInfoDto {
  @IsString()
  id: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsString()
  fullName: string;

  @IsString()
  email: string;

  @IsString()
  Role: string;
}

export class CreateUserInfoDto {
  @IsString()
  fullName: string;

  @IsString()
  email: string;

  @IsString()
  Role: string;
}

export class UpdateUserInfoDto {
  @IsString()
  id: string;

  @IsString()
  @IsOptional()
  fullName?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  Role?: string;
}

export class UserIdDto {
  @IsString()
  id: string;
}
