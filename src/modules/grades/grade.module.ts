import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Grade } from './grade.model';

@Module({
  imports: [SequelizeModule.forFeature([Grade])],
  // controllers: [GradesController],
  // providers: [GradesService],
})
export class GradesModule {}
