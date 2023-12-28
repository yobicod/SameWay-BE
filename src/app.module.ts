import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotifyModule } from './modules/notify/notify.module';
import { DriverModule } from './modules/driver/driver.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { UserModule } from './modules/user/user.module';
import { logger } from './middleware/middleware';
import { FeedbackModule } from './modules/feedback/feedback.module';
import { GatewayModule } from './modules/gateway/gateway.module';
import { ReportModule } from './modules/report/report.module';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { BookingModule } from './modules/booking/booking.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RedisModule.forRoot({
      config: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT),
        // password: 'xxxx',
      },
    }),
    NotifyModule,
    UserModule,
    DriverModule,
    PrismaModule,
    HttpModule,
    FeedbackModule,
    GatewayModule,
    ReportModule,
    BookingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes('*');
  }
}
