import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty({
    example: 'Васечкин',
    description: 'Фамилия ученика',
  })
  readonly lastName: string;
}
