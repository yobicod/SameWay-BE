import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreateUserInfoDto,
  EnumGendersDto,
  UpdateUserInfoDto,
  UserInfoDto,
} from './dto/user.dto';
import { ROLE } from 'src/constants/enum';
import { encrypt } from 'src/global-function';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import { Redis } from 'ioredis';
@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    // @InjectRedis() private readonly redis: Redis,
  ) {}

  public async getAllUsers(): Promise<UserInfoDto[]> {
    try {
      const allUsers = await this.prisma.user.findMany();

      // const dataInRedis = await this.redis.get('test');
      // console.log(
      //   '🚀 ~ file: user.service.ts:25 ~ UserService ~ getAllUsers ~ dataInRedis:',
      //   dataInRedis,
      // );
      return allUsers;
    } catch (error) {
      console.log(
        '🚀 ~ file: user.service.ts:16 ~ UserService ~ getAllUser ~ error:',
        error,
      );
      throw new InternalServerErrorException(error.message);
    }
  }

  public async getEnumGenders(): Promise<EnumGendersDto[]> {
    try {
      const enumGenders = await this.prisma.enumGender.findMany();
      return enumGenders;
    } catch (error) {
      console.log(
        '🚀 ~ file: user.service.ts:33 ~ UserService ~ getEnumGenders ~ error:',
        error,
      );
      throw new InternalServerErrorException(error.message);
    }
  }

  public async getUserById(id: string): Promise<UserInfoDto> {
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

  public async checkHasUser(email: string): Promise<boolean> {
    try {
      const hasUserInSystem = await this.prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!hasUserInSystem) return false;
      return true;
    } catch (error) {
      console.log(
        '🚀 ~ file: user.service.ts:71 ~ UserService ~ checkHasUser ~ error:',
        error,
      );
      throw new InternalServerErrorException(error.message);
    }
  }

  public async getUserPermission(email: string): Promise<string> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          email,
        },
        select: {
          role: true,
        },
      });
      return encrypt(user.role);
    } catch (error) {
      console.log(
        '🚀 ~ file: user.service.ts:80 ~ UserService ~ getUserPermission ~ error:',
        error,
      );
      throw new InternalServerErrorException(error.message);
    }
  }

  public async createUser(
    createUserDriver: CreateUserInfoDto,
  ): Promise<boolean> {
    try {
      await this.prisma.user.create({
        data: {
          ...createUserDriver,
          role: ROLE.user,
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

  public async updateUser(
    updateUserDriver: UpdateUserInfoDto,
  ): Promise<boolean> {
    try {
      await this.prisma.user.update({
        data: {
          fullName: updateUserDriver.fullName || undefined,
          email: updateUserDriver.email || undefined,
          role: updateUserDriver.role || undefined,
        },
        where: {
          email: updateUserDriver.email,
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

  public async deleteUser(email: string): Promise<boolean> {
    try {
      await this.prisma.user.delete({
        where: {
          email,
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
