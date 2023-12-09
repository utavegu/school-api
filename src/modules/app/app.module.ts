import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ConfigModule } from '@nestjs/config';
import { Discipline } from '../disciplines/disciplines.model';
import { DisciplinesModule } from '../disciplines/disciplines.module';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   envFilePath: '.env',
    // }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'schooldb',
      models: [Discipline],
      autoLoadModels: true,
    }),
    DisciplinesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
