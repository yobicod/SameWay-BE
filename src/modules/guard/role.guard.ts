import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { ROLE } from 'src/constants/enum';
import { ROLES_KEY } from './role.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    // console.log('guard >>>');
    // const requiredRoles = this.reflector.getAllAndOverride<ROLE[]>(ROLES_KEY, [
    //   context.getHandler(),
    //   context.getClass(),
    // ]);
    // console.log(
    //   '🚀 ~ file: role.guard.ts:33 ~ RolesGuard ~ canActivate ~ requiredRoles:',
    //   requiredRoles,
    // );
    // if (!requiredRoles) {
    //   return true;
    // }
    // const { user } = context.switchToHttp().getRequest();
    // return requiredRoles.some((role) => user.roles?.includes(role));
    return true;
  }
}
