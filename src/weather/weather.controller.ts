import { Get, Controller, Query, Param, Delete } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { Weather, WeatherDocument } from '../../mongoose/schema/weather.schema';

@Controller('weather')
export class WeatherController {
  constructor(private readonly WeatherService: WeatherService) { }

  // http://localhost:3001/weather/get-weather-from-api?lat=22&long=32
  @Get('get-weather-from-api')
  public async getWeather(@Query('lat') lat: string,
    @Query('long') long: string) {
    const response = await this.WeatherService.getWeather(lat, long);
    return response;
  }

  // http://localhost:3001/weather/get-all
  @Get('get-all')
  async findAll(): Promise<Weather[]> {
    return this.WeatherService.findAll();
  }

  // http://localhost:3001/weather/630ca92339d32b087398f24f
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Weather> {
    return this.WeatherService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.WeatherService.delete(id);
  }
}
