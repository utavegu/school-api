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
import { Student } from '../students/student.model';

interface GradeCreationAttributes {
  name: string;
}

@Table({ tableName: 'grades' })
export class Grade extends Model<Grade, GradeCreationAttributes> {
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
    example: '9а',
    description: 'Название класса',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @ForeignKey(() => Teacher)
  @Column({ type: DataType.INTEGER })
  teacherId: number;

  @BelongsTo(() => Teacher)
  teacher: Teacher;

  @HasMany(() => Student)
  students: Student[];
}
