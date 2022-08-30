import { HttpService } from '@nestjs/axios';
import { Injectable, } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, map, lastValueFrom } from 'rxjs';
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
    const response = await lastValueFrom(this.httpService.get(WEATHER_FORCAST + `?lat=${latitude}&lon=${longitude}&appid=${APP_ID}`).pipe(
      map(response => response.data))
    );
    createWeatherResponse = {
      url: WEATHER_FORCAST,
      response: JSON.stringify(response),
      timestamp: Date.now()
    }
    return await this.weatherModel.create(createWeatherResponse);
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
