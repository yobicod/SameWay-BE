import { IsOptional, IsString } from 'class-validator';

export class DriverinfoDto {
  @IsString()
  id: string;

  @IsString()
  driverFirstName: string;

  @IsString()
  driverLastName: string;

  @IsString()
  plate: string;

  @IsString()
  carType: string;

  @IsString()
  sex: string;

  @IsString()
  phoneNumber: string;
}

export class UpdateDriverInfoDto {
  @IsString()
  id: string;

  @IsString()
  @IsOptional()
  driverFirstName?: string;

  @IsString()
  @IsOptional()
  driverLastName?: string;

  @IsString()
  @IsOptional()
  plate?: string;

  @IsString()
  @IsOptional()
  carType?: string;

  @IsString()
  @IsOptional()
  sex?: string;

  @IsString()
  @IsOptional()
  phoneNumber?: string;
}
export class CreateDriverInfoDto {
  @IsString()
  @IsOptional()
  driverFirstName?: string;

  @IsString()
  @IsOptional()
  driverLastName?: string;

  @IsString()
  plate?: string;

  @IsString()
  carType?: string;

  @IsString()
  @IsOptional()
  sex?: string;

  @IsString()
  @IsOptional()
  phoneNumber?: string;
}

export class DriverId {
  @IsString()
  id: string;
}
