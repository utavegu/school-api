import { ApiProperty } from '@nestjs/swagger';

export class CreateGradeDto {
  @ApiProperty({
    example: '9а',
    description: 'Название класса',
  })
  readonly name: string;
}
