import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WeatherModule } from './weather/weather.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/weather-app'), WeatherModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
