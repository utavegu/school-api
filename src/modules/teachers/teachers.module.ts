import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Teacher } from './teacher.model';
import { Discipline } from '../disciplines/discipline.model';
import { TeacherDisciplines } from './teacher-disciplines.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Teacher, Discipline, TeacherDisciplines]),
  ],
  // controllers: [TeachersController],
  // providers: [TeachersService],
})
export class TeachersModule {}
