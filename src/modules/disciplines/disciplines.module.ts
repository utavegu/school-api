import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Discipline } from './discipline.model';
import { Teacher } from '../teachers/teacher.model';
import { TeacherDisciplines } from '../teachers/teacher-disciplines.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Discipline, Teacher, TeacherDisciplines]),
  ],
  // controllers: [DisciplinesController],
  // providers: [DisciplinesService],
})
export class DisciplinesModule {}
