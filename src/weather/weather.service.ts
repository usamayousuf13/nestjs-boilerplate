import { HttpService } from '@nestjs/axios';
import { Injectable, } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WEATHER_FORCAST, APP_ID } from '../util/constants';
import { Weather, WeatherDocument } from '../../mongoose/schema/weather.schema';

@Injectable()
export class WeatherService {
  constructor(private readonly httpService: HttpService,
    @InjectModel(Weather.name) private readonly weatherModel: Model<WeatherDocument>,) { }

  async getWeather(latitude, longitude): Promise<Weather> {
    let createWeatherResponse;
    this.httpService.get(WEATHER_FORCAST + `?lat=${latitude}&lon=${longitude}&appid=${APP_ID}`).pipe(
      map(response => response.data)).subscribe(resp => {
        createWeatherResponse = {
          url: WEATHER_FORCAST,
          response: JSON.stringify(resp),
          timestamp: Date.now()
        }
        this.weatherModel.create(createWeatherResponse);
      });
    return createWeatherResponse;

  }
}
