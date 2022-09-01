import { HttpService } from '@nestjs/axios';
import { Injectable, } from '@nestjs/common';
import { map, lastValueFrom } from 'rxjs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { Weather, WeatherDocument } from '../../mongoose/schema/weather.schema';

@Injectable()
export class WeatherService {
  constructor(private readonly httpService: HttpService,
    @InjectModel(Weather.name) private readonly weatherModel: Model<WeatherDocument>,
    private readonly configService: ConfigService) { }

  async getWeather(latitude, longitude): Promise<Weather> {
    try {
      const weatherConstant = this.configService.get('WEATHER');
      let createWeatherResponse;
      const response = await lastValueFrom(this.httpService.get(weatherConstant.WEATHER_FORCAST + `?lat=${latitude}&lon=${longitude}&appid=${weatherConstant.APP_ID}`).pipe(
        map(response => response.data))
      );
      createWeatherResponse = {
        url: weatherConstant.WEATHER_FORCAST,
        response: JSON.stringify(response),
        timestamp: Date.now()
      }
      return await this.weatherModel.create(createWeatherResponse);
    } catch (e) {
      console.log("error: ", e);
    }
  }

  async findAll(): Promise<Weather[]> {
    return this.weatherModel.find().exec();
  }

  async findOne(id: string): Promise<Weather> {
    return this.weatherModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedWeather = await this.weatherModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedWeather;
  }
}
