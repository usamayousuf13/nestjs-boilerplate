import { Injectable,} from '@nestjs/common';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

@Injectable()
export class WeatherService {
  private client: AxiosInstance;

  constructor() {

    this.client = axios.create({
        baseURL: 'api.openweathermap.org/data/2.5/forecast?lat=67&lon=23&appid=524d4535966183a29c037c14f4ed5dbc',
    });
  }
}
