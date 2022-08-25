import { HttpService } from '@nestjs/axios';
import { Injectable, } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(private readonly httpService: HttpService) { }

  getWeather(): Observable<AxiosResponse<any>> {
    return this.httpService.get('http://api.openweathermap.org/data/2.5/forecast?lat=67&lon=23&appid=524d4535966183a29c037c14f4ed5dbc').pipe(
      map(response => response.data)
    );
  }
}
