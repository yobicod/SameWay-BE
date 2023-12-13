import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DriverService } from '../driver/driver.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly driverService: DriverService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // ----->
    const request = context.switchToHttp().getRequest();
    console.log('🚀 ~ file: role.guard.ts:17 ~ RolesGuard ~ request:', request);
    if (true) {
      throw new UnauthorizedException('Permission Denied');
    }
    return true;
  }
}
