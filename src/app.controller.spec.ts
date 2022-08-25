import { Test, TestingModule } from '@nestjs/testing';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';

describe('WeatherController', () => {
  let weatherController: WeatherController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WeatherController],
      providers: [WeatherService],
    }).compile();

    weatherController = app.get<WeatherController>(WeatherController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(weatherController.getWeather()).toBe('Hello World!');
    });
  });
});
