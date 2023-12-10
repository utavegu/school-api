import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Lesson } from './lesson.model';

@Module({
  imports: [SequelizeModule.forFeature([Lesson])],
  // controllers: [LessonsController],
  // providers: [LessonsService],
})
export class LessonsModule {}
