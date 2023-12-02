import { Module } from '@nestjs/common';
import { NotifyController } from './notify.controller';
import { NotifyService } from './noify.service';
import { HttpWrapperModule } from 'src/http/http.module';

@Module({
  imports: [HttpWrapperModule],
  controllers: [NotifyController],
  providers: [NotifyService],
})
export class NotifyModule {}
