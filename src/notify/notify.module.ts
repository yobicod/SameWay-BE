import { Module } from '@nestjs/common';
import { NotifyController } from './notify.controller';

@Module({
  controllers: [NotifyController]
})
export class NotifyModule {}
