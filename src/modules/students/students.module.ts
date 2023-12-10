import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Student } from './student.model';

@Module({
  imports: [SequelizeModule.forFeature([Student])],
  // controllers: [StudentsController],
  // providers: [StudentsService],
})
export class StudentsModule {}
