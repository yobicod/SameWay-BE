import {
  Injectable,
  InternalServerErrorException,
  Param,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserIdDto, UserInfoDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  public async getAllUsers(): Promise<UserInfoDto[]> {
    try {
      const allUsers = await this.prisma.user.findMany();
      return allUsers;
    } catch (error) {
      console.log(
        '🚀 ~ file: user.service.ts:16 ~ UserService ~ getAllUser ~ error:',
        error,
      );
      throw new InternalServerErrorException(error.message);
    }
  }

  public async getUserById(@Param() id: string): Promise<UserInfoDto> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id,
        },
      });
      return user;
    } catch (error) {
      console.log(
        '🚀 ~ file: user.service.ts:34 ~ UserService ~ getUserById ~ error:',
        error,
      );
      throw new InternalServerErrorException(error.message);
    }
  }

  public async createUser(createUserDriver: any): Promise<boolean> {
    try {
      await this.prisma.user.create({
        data: {
          ...createUserDriver,
        },
      });
      return true;
    } catch (error) {
      console.log(
        '🚀 ~ file: user.service.ts:26 ~ UserService ~ createUser ~ error:',
        error,
      );
      throw new InternalServerErrorException(error.message);
    }
  }

  public async updateUser(updateUserDriver: any): Promise<boolean> {
    try {
      await this.prisma.user.update({
        data: {
          createdAt: updateUserDriver.createdAt,
        },
        where: {
          fullName: updateUserDriver.fullName,
          email: updateUserDriver.email,
          Role: updateUserDriver.Role,
        },
      });
      return true;
    } catch (error) {
      console.log(
        '🚀 ~ file: user.service.ts:62 ~ UserService ~ updateUser ~ error:',
        error,
      );
      throw new InternalServerErrorException(error.message);
    }
  }

  public async deleteUser(id: string): Promise<boolean> {
    try {
      await this.prisma.user.delete({
        where: {
          id,
        },
      });
      return true;
    } catch (error) {
      console.log(
        '🚀 ~ file: user.service.ts:85 ~ UserService ~ deleteUser ~ error:',
        error,
      );
      throw new InternalServerErrorException(error.message);
    }
  }
}
