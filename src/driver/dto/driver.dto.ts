export class IDriverCreateInfoDto {
  id: string;
  driverFirstName: string;
  driverLastName: string;
  plate: string;
  carType: string;
  sex: string;
  phoneNumber: string;
}

export class IDriverUpdateInfoDto {
  id: string;
  driverFirstName?: string;
  driverLastName?: string;
  plate?: string;
  carType?: string;
  sex?: string;
  phoneNumber?: string;
}
