import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateUserInfoDto,
  UpdateUserInfoDto,
  UserInfoDto,
} from './dto/user.dto';
import { UserService } from './user.service';
import { IUserService } from './interfaces/user.service.interface';

@ApiTags('user')
@Controller('user')
export class UserController implements IUserService {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getAllUsers(): Promise<UserInfoDto[]> {
    return await this.userService.getAllUsers();
  }

  @Post('create-user')
  async createUser(
    @Body() createUserInput: CreateUserInfoDto,
  ): Promise<boolean> {
    return await this.userService.createUser(createUserInput);
  }

  @Patch('update-user')
  async updateUser(
    @Body() updateUserInput: UpdateUserInfoDto,
  ): Promise<boolean> {
    return await this.userService.updateUser(updateUserInput);
  }

  @Delete('delete-user-by-id/:id')
  async deleteUser(@Param('id') userId: string): Promise<boolean> {
    return await this.userService.deleteUser(userId);
  }
}
