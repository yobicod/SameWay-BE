import { Module } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { UserModule } from '../user/user.module';
import { RedisModule } from '@liaoliaots/nestjs-redis';

@Module({
  imports: [UserModule, RedisModule],
  providers: [GatewayService],
})
export class GatewayModule {}
