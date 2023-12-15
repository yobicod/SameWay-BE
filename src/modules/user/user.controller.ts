import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  CreateUserInfoDto,
  EnumGendersDto,
  UpdateUserInfoDto,
  UserInfoDto,
} from './dto/user.dto';
import { UserService } from './user.service';
import { IUserService } from './interfaces/user.service.interface';

@ApiTags('user')
@ApiBearerAuth()
@Controller('user')
export class UserController implements IUserService {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getAllUsers(): Promise<UserInfoDto[]> {
    return await this.userService.getAllUsers();
  }

  @Get('enum-genders')
  async getGenders(): Promise<EnumGendersDto[]> {
    return await this.userService.getEnumGenders();
  }

  @Get('has-user-in-system/:email')
  async checkUser(@Param('email') email: string): Promise<boolean> {
    return await this.userService.checkHasUser(email);
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
