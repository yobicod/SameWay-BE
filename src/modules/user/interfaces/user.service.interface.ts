import {
  CreateUserInfoDto,
  EnumGendersDto,
  UpdateUserInfoDto,
  UserInfoDto,
} from '../dto/user.dto';

export interface IUserService {
  getAllUsers(): Promise<UserInfoDto[]>;
  getGenders(): Promise<EnumGendersDto[]>;
  createUser(createUserInput: CreateUserInfoDto): Promise<boolean>;
  updateUser(updateUserInput: UpdateUserInfoDto): Promise<boolean>;
  deleteUser(email: string): Promise<boolean>;
}
