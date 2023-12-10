import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty({
    example: '8:30',
    description: 'Время начала урока/лекции',
  })
  readonly startTime: Date;

  @ApiProperty({
    example: '9:10',
    description: 'Время окончания урока/лекции',
  })
  readonly endTime: Date;
}
