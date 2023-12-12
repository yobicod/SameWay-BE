import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HttpWrapperService } from './http.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 30000,
      maxRedirects: 3,
    }),
  ],
  providers: [HttpWrapperService],
  exports: [HttpWrapperService],
})
export class HttpWrapperModule {}
