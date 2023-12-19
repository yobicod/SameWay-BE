import { Module } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  providers: [GatewayService],
})
export class GatewayModule {}
