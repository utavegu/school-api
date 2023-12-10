import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Classroom } from './classroom.model';

@Module({
  imports: [SequelizeModule.forFeature([Classroom])],
  // controllers: [ClassroomsController],
  // providers: [ClassroomsService],
})
export class ClassroomsModule {}
