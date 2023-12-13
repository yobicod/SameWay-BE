import { Module } from '@nestjs/common';
import { DriverService } from '../driver/driver.service';
import { RolesGuard } from './role.guard';

@Module({
  providers: [RolesGuard, DriverService],
  exports: [RolesGuard],
})
export class GuardsModule {}
