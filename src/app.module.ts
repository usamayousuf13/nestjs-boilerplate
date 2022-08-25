import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class AppModule {}
