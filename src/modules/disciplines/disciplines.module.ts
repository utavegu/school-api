import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Discipline } from './disciplines.model';

@Module({
  imports: [SequelizeModule.forFeature([Discipline])],
  // controllers: [DisciplinesController],
  // providers: [DisciplinesService],
})
export class DisciplinesModule {}
