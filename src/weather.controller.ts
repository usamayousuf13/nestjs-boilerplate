import { Get, Controller } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('app')
export class WeatherController {
  constructor(private readonly WeatherService: WeatherService) {}

  @Get()
  public root()  {
    const response = this.WeatherService;
    return response;
  }
}
