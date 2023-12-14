import {
  CreateUserInfoDto,
  UpdateUserInfoDto,
  UserInfoDto,
} from '../dto/user.dto';

export interface IUserService {
  getAllUsers(): Promise<UserInfoDto[]>;
  createUser(createUserInput: CreateUserInfoDto): Promise<boolean>;
  updateUser(updateUserInput: UpdateUserInfoDto): Promise<boolean>;
  deleteUser(email: string): Promise<boolean>;
}
