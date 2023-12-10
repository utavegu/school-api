import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Grade } from '../grades/grade.model';

interface StudentCreationAttributes {
  lastName: string;
}

@Table({ tableName: 'students' })
export class Student extends Model<Student, StudentCreationAttributes> {
  @ApiProperty({
    example: '1',
    description: 'Уникальный идентификатор ученика',
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({
    example: 'Васечкин',
    description: 'Фамилия ученика',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  // TODO: Успеваемость - объект: предмет и массив оценок (намберс), пока думаю над реализацией

  @ForeignKey(() => Grade)
  @Column({ type: DataType.INTEGER })
  gradeId: number;

  @BelongsTo(() => Grade)
  belongsToGrade: Grade;
}
