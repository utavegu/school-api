import { ApiProperty } from '@nestjs/swagger';

export class CreateGradeDto {
  @ApiProperty({
    example: '204',
    description: 'Номер аудитории',
  })
  readonly classroomNumber: number;

  @ApiProperty({
    example: 'Кабинет русского языка и литературы',
    description: 'Описание (назначение) аудитории',
  })
  readonly description?: string;

  @ApiProperty({
    example: '3',
    description: 'Этаж, на котором расположена аудитория',
  })
  readonly floor?: number;

  @ApiProperty({
    example: 'Старый корпус',
    description: 'Корпус школы, в котором расположена аудитория',
  })
  readonly housing?: string;
}
