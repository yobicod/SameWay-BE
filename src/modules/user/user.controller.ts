import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
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
import { RolesGuard } from '../guard/role.guard';

@ApiTags('user')
@ApiBearerAuth()
@Controller('user')
export class UserController implements IUserService {
  constructor(private readonly userService: UserService) {}
  @Get()
  @UseGuards(RolesGuard)
  async getAllUsers(): Promise<UserInfoDto[]> {
    return await this.userService.getAllUsers();
  }

  @Get('enum-genders')
  @UseGuards(RolesGuard)
  async getGenders(): Promise<EnumGendersDto[]> {
    return await this.userService.getEnumGenders();
  }

  @Get('has-user-in-system/:email')
  @UseGuards(RolesGuard)
  async checkUser(@Param('email') email: string): Promise<boolean> {
    return await this.userService.checkHasUser(email);
  }

  @Get('rbac/:email')
  @UseGuards(RolesGuard)
  async getUserPermission(@Param('email') email: string): Promise<string> {
    return await this.userService.getUserPermission(email);
  }

  @Post('create-user')
  @UseGuards(RolesGuard)
  async createUser(
    @Body() createUserInput: CreateUserInfoDto,
  ): Promise<boolean> {
    return await this.userService.createUser(createUserInput);
  }

  @Patch('update-user')
  @UseGuards(RolesGuard)
  async updateUser(
    @Body() updateUserInput: UpdateUserInfoDto,
  ): Promise<boolean> {
    return await this.userService.updateUser(updateUserInput);
  }

  @Delete('delete-user-by-id/:id')
  @UseGuards(RolesGuard)
  async deleteUser(@Param('id') userId: string): Promise<boolean> {
    return await this.userService.deleteUser(userId);
  }
}
