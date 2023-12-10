import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { Teacher } from '../teachers/teacher.model';
import { TeacherDisciplines } from '../teachers/teacher-disciplines.model';
import { Lesson } from '../lessons/lesson.model';

interface DisciplineCreationAttributes {
  name: string;
  description: string;
}

@Table({ tableName: 'disciplines' })
export class Discipline extends Model<
  Discipline,
  DisciplineCreationAttributes
> {
  @ApiProperty({
    example: '1',
    description: 'Уникальный идентификатор дисциплины (школьного предмета)',
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({
    example: 'Математика',
    description: 'Название дисциплины (школьного предмета)',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example:
      'Наука о количественных отношениях и пространственных формах действительного мира',
    description: 'Описание дисциплины (школьного предмета)',
  })
  @Column({
    type: DataType.STRING,
  })
  description: string;

  @BelongsToMany(() => Teacher, () => TeacherDisciplines)
  teachers: Teacher[];

  @HasOne(() => Lesson)
  lesson: Lesson;
}
