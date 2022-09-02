import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WeatherModule } from './weather/weather.module';
import { ConfigModule } from '@nestjs/config';
import constant from './util/constant';
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [constant],
  }),
  MongooseModule.forRoot('mongodb://localhost:27017/weather-app'),
    WeatherModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
