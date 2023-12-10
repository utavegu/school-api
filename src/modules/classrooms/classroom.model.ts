import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript';
import { Lesson } from '../lessons/lesson.model';

interface ClassroomCreationAttributes {
  classroomNumber: number;
  description: string;
  floor: number;
  housing: string;
}

@Table({ tableName: 'classrooms' })
export class Classroom extends Model<Classroom, ClassroomCreationAttributes> {
  @ApiProperty({
    example: '1',
    description: 'Уникальный идентификатор аудитории',
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({
    example: '204',
    description: 'Номер аудитории',
  })
  @Column({
    type: DataType.SMALLINT,
    unique: true,
    allowNull: false,
  })
  classroomNumber: number;

  @ApiProperty({
    example: 'Кабинет русского языка и литературы',
    description: 'Описание (назначение) аудитории',
  })
  @Column({
    type: DataType.INTEGER,
  })
  description: string;

  @ApiProperty({
    example: '3',
    description: 'Этаж, на котором расположена аудитория',
  })
  @Column({
    type: DataType.SMALLINT,
  })
  floor: number;

  // TODO: Пока строка, но лучше енумка
  @ApiProperty({
    example: 'Старый корпус',
    description: 'Корпус школы, в котором расположена аудитория',
  })
  @Column({
    type: DataType.INTEGER,
  })
  housing: string;

  @HasOne(() => Lesson)
  lesson: Lesson;
}
