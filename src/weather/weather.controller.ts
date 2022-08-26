import { Get, Controller, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly WeatherService: WeatherService) { }

  @Get('get-weather')
  public getWeather(@Query('lat') lat: string,
    @Query('long') long: string) {
    const response = this.WeatherService.getWeather(lat, long);
    return response;
  }
}
