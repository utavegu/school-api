import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ConfigModule } from '@nestjs/config';
import { Discipline } from '../disciplines/discipline.model';
import { DisciplinesModule } from '../disciplines/disciplines.module';
import { Grade } from '../grades/grade.model';
import { GradesModule } from '../grades/grade.module';
import { Teacher } from '../teachers/teacher.model';
import { TeachersModule } from '../teachers/teachers.module';
import { Student } from '../students/student.model';
import { StudentsModule } from '../students/students.module';
import { TeacherDisciplines } from '../teachers/teacher-disciplines.model';
import { Classroom } from '../classrooms/classroom.model';
import { ClassroomsModule } from '../classrooms/classrooms.module';
import { Lesson } from '../lessons/lesson.model';
import { LessonsModule } from '../lessons/lesson.module';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   envFilePath: '.env',
    // }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'schooldb',
      models: [
        Discipline,
        Grade,
        Teacher,
        Student,
        TeacherDisciplines,
        Classroom,
        Lesson,
      ],
      autoLoadModels: true,
    }),
    DisciplinesModule,
    GradesModule,
    TeachersModule,
    StudentsModule,
    ClassroomsModule,
    LessonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
