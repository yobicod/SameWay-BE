import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotifyModule } from './modules/notify/notify.module';

import { DriverModule } from './modules/driver/driver.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { UserModule } from './modules/user/user.module';
import { logger } from './modules/middleware/middleware';
import { FeedbackModule } from './modules/feedback/feedback.module';
import { GatewayModule } from './modules/gateway/gateway.module';
import { RedisModule } from '@liaoliaots/nestjs-redis';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // RedisModule.forRoot({
    //   config: {
    //     host: process.env.REDIS_HOST,
    //     port: parseInt(process.env.REDIS_PORT),
    //     // password: 'xxxx',
    //   },
    // }),
    NotifyModule,
    UserModule,
    DriverModule,
    PrismaModule,
    HttpModule,
    FeedbackModule,
    GatewayModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes('*');
  }
}
