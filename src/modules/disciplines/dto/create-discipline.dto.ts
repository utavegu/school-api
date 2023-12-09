import { ApiProperty } from '@nestjs/swagger';

export class CreateDisciplineDto {
  @ApiProperty({
    example: 'Математика',
    description: 'Название дисциплины (школьного предмета)',
  })
  readonly name: string;

  @ApiProperty({
    example:
      'Наука о количественных отношениях и пространственных формах действительного мира',
    description: 'Описание дисциплины (школьного предмета)',
  })
  readonly description: string;
}
