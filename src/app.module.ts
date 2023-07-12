import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WeatherModule } from './weather/weather.module';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import constant from './util/constant';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [constant],
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
        },
      },
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    WeatherModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
