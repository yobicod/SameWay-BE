import { Module } from '@nestjs/common';
import { NotifyController } from './notify.controller';
import { NotifyService } from './noify.service';
import { PrismaModule } from 'src/modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [NotifyController],
  providers: [NotifyService],
})
export class NotifyModule {}
