import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotifyModule } from './notify/notify.module';
import { HttpWrapperModule } from './http/http.module';
import { DriverModule } from './driver/driver.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [NotifyModule, HttpWrapperModule, DriverModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
