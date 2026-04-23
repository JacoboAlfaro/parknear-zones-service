import { Module } from '@nestjs/common';
import { ZonasController } from './zones.controller';
import { ZonasService } from './zones.service';

@Module({
  controllers: [ZonasController],
  providers: [ZonasService],
})
export class ZonasModule {}