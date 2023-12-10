import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Teacher } from '../teachers/teacher.model';
import { Grade } from '../grades/grade.model';
import { Discipline } from '../disciplines/discipline.model';
import { Classroom } from '../classrooms/classroom.model';

interface LessonCreationAttributes {
  startTime: Date;
  endTime: Date;
}

@Table({ tableName: 'lessons' })
export class Lesson extends Model<Lesson, LessonCreationAttributes> {
  @ApiProperty({
    example: '1',
    description: 'Уникальный идентификатор класса учащихся',
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({
    example: '1',
    description: 'Внешний ключ, связывающий по ID с таблицей учителей',
  })
  @ForeignKey(() => Teacher)
  @Column({ type: DataType.INTEGER })
  teacherId: number;

  @BelongsTo(() => Teacher)
  teacher: Teacher;

  @HasMany(() => Grade)
  grades: Grade[];

  @ApiProperty({
    example: '1',
    description: 'Внешний ключ, связывающий по ID с таблицей учебных дисциплин',
  })
  @ForeignKey(() => Discipline)
  @Column({ type: DataType.INTEGER })
  disciplineId: number;

  @BelongsTo(() => Discipline)
  discipline: Teacher;

  @ApiProperty({
    example: '1',
    description:
      'Внешний ключ, связывающий по ID с таблицей учебных аудиторий/кабинетов',
  })
  @ForeignKey(() => Classroom)
  @Column({ type: DataType.INTEGER })
  classroomId: number;

  @BelongsTo(() => Classroom)
  classRoom: Classroom;

  @ApiProperty({
    example: '8:30',
    description: 'Время начала урока/лекции',
  })
  @Column({
    type: DataType.TIME,
    unique: true,
    allowNull: false,
  })
  startTime: Date;

  @ApiProperty({
    example: '9:10',
    description: 'Время окончания урока/лекции',
  })
  @Column({
    type: DataType.TIME,
    unique: true,
    allowNull: false,
  })
  endTime: Date;
}
