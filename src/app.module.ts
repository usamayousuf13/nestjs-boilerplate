import { Module } from '@nestjs/common';
import { WeatherController } from './weather/weather.controller';
import { WeatherService } from './weather/weather.service';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [HttpModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class AppModule { }
