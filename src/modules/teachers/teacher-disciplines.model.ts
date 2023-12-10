import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Discipline } from '../disciplines/discipline.model';
import { Teacher } from './teacher.model';

@Table({
  tableName: 'teacher_disciplines',
  createdAt: false,
  updatedAt: false,
})
export class TeacherDisciplines extends Model<TeacherDisciplines> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Discipline)
  @Column({ type: DataType.INTEGER })
  disciplineId: number;

  @ForeignKey(() => Teacher)
  @Column({ type: DataType.INTEGER })
  teacherId: number;
}
