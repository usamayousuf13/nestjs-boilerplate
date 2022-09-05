import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { Weather, WeatherSchema } from '../../mongoose/schema/weather.schema';
import { HttpModule } from '@nestjs/axios';
import { LoggerModule } from '../logger/logger.module';
import { HelperModule } from '../util/helper/helper.module';
@Module({
    imports: [
        HttpModule,
        MongooseModule.forFeature([
            { name: Weather.name, schema: WeatherSchema }
        ]),
        LoggerModule,
        HelperModule],
    controllers: [WeatherController],
    providers: [WeatherService],
})
export class WeatherModule { }