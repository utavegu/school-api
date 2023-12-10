import { ApiProperty } from '@nestjs/swagger';

export class CreateTeacherDto {
  @ApiProperty({
    example: 'Петров',
    description: 'Фамилия преподавателя',
  })
  readonly lastName: string;

  @ApiProperty({
    example: 'petrov@mail.ru',
    description: 'Электронная почта преподавателя',
  })
  readonly email: string;

  @ApiProperty({
    example: '8-922-617-98-41',
    description: 'Телефон преподавателя',
  })
  readonly phone: string;

  @ApiProperty({
    example: 'aZ41_!-3dJa8',
    description: 'Пароль от учетной записи преподавателя',
  })
  readonly password: string;

  @ApiProperty({
    example: '2012-10-01',
    description: 'Дата приёма на работу',
  })
  readonly employmentDate?: Date;
}
