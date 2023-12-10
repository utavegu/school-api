import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { Discipline } from '../disciplines/discipline.model';
import { TeacherDisciplines } from './teacher-disciplines.model';
import { Grade } from '../grades/grade.model';
import { Lesson } from '../lessons/lesson.model';

interface TeacherCreationAttributes {
  lastName: string;
  email: string;
  phone: string;
  password: string;
  employmentDate: Date;
}

@Table({ tableName: 'teachers' })
export class Teacher extends Model<Teacher, TeacherCreationAttributes> {
  @ApiProperty({
    example: '1',
    description: 'Уникальный идентификатор преподавателя',
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({
    example: 'Петров',
    description: 'Фамилия преподавателя',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  @ApiProperty({
    example: 'petrov@mail.ru',
    description: 'Электронная почта преподавателя',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({
    example: '8-922-617-98-41',
    description: 'Телефон преподавателя',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  phone: string;

  @ApiProperty({
    example: 'aZ41_!-3dJa8',
    description: 'Пароль от учетной записи преподавателя',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  // TODO: Пока массив строк, но вообще массив енумок - учитель, завуч, директор
  @ApiProperty({
    example: '["teacher", "director"]',
    description: 'Роли преподавателя',
  })
  @Column({
    type: DataType.ARRAY(DataType.STRING),
    defaultValue: ['teacher'],
  })
  roles: string[];

  @ApiProperty({
    example: '2012-10-01',
    description: 'Дата приёма на работу',
  })
  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: new Date(),
  })
  employmentDate: Date;

  @ApiProperty({
    example: '2020-01-18',
    description: 'Дата увольнения',
  })
  @Column({
    type: DataType.DATE,
  })
  dismissalDate: Date;

  @ApiProperty({
    example: 'true',
    description: 'Работает ли ещё данный преподаватель или уже уволился',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  isStillWork: boolean;

  @ApiProperty({
    example: 'false',
    description: 'Является ли данный преподаватель классным руководителем',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isHomeroomTeacher: boolean;

  @HasOne(() => Grade)
  subordinateGrade: Grade;

  @BelongsToMany(() => Discipline, () => TeacherDisciplines)
  disciplines: Discipline[];

  @HasOne(() => Lesson)
  teachesLesson: Lesson;
}
