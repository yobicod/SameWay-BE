import { Module } from '@nestjs/common';
import { NotifyController } from './notify.controller';
import { NotifyService } from './noify.service';
import { HttpWrapperModule } from 'src/modules/http/http.module';
import { PrismaModule } from 'src/modules/prisma/prisma.module';

@Module({
  imports: [HttpWrapperModule, PrismaModule],
  controllers: [NotifyController],
  providers: [NotifyService],
})
export class NotifyModule {}
