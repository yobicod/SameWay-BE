import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotifyModule } from './notify/notify.module';
import { NoifyService } from './notify/noify.service';

@Module({
  imports: [NotifyModule],
  controllers: [AppController],
  providers: [AppService, NoifyService],
})
export class AppModule {}
