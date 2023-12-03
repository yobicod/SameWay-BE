import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotifyModule } from './notify/notify.module';
import { HttpWrapperModule } from './http/http.module';

@Module({
  imports: [NotifyModule, HttpWrapperModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
