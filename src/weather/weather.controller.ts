import { Get, Controller, Query, Param, Delete } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { Weather } from '../../mongoose/schema/weather.schema';
import { HelperService } from '../util/helper/helper.service';
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService,
    private readonly helperService: HelperService) { }

  // http://localhost:3001/weather/get-weather-from-api?lat=22&long=32
  @Get('get-weather-from-api')
  public async getWeather(@Query('lat') lat: string,
    @Query('long') long: string) {
    try {
      const response = await this.weatherService.getWeather(lat, long);
      return this.helperService.apiResponse({
        status: 200,
        data: response.response,
        message: "Success",
      });
    } catch (error) {
      return this.helperService.apiResponse({
        status: this.helperService.setErrorStatus(error),
        errors: error,
        message: "Something went wrong",
      })
    }
  }

  // http://localhost:3001/weather/get-all
  @Get('get-all')
  async findAll(): Promise<Weather[]> {
    return this.weatherService.findAll();
  }

  // http://localhost:3001/weather/630ca92339d32b087398f24f
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Weather> {
    return this.weatherService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.weatherService.delete(id);
  }
}
