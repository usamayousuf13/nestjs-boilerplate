import { Get, Controller, Query, Param, Delete } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { Weather } from '../../mongoose/schema/weather.schema';
import { HelperService } from '../util/helper/helper.service';
import { AppLogger } from '../logger/app-logger.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService,
    private readonly helperService: HelperService,
    private appLogger: AppLogger) { }

  // URL - /weather/get-weather-from-api?lat=22&long=32
  @Get('get-weather-from-api')

  // Takes latitude and longitude from user (URL) and trigger third party API to get response and also stores in DB
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
      // logs error in DB
      this.appLogger.saveErrorLog(error.response.data, error.response.status, error, error.message);
      return this.helperService.apiResponse({
        status: this.helperService.setErrorStatus(error),
        errors: error,
        message: "Something went wrong",
      })
    }
  }

  // URL - /weather/get-all
  @Get('get-all')
  async findAll(): Promise<Weather[]> {
    return this.weatherService.findAll();
  }

  // URL - /weather/630ca92339d32b087398f24f
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Weather> {
    return this.weatherService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.weatherService.delete(id);
  }
}
