import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WeatherModule } from './weather/weather.module';
import { ConfigModule } from '@nestjs/config';
import constant from './util/constant';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [constant],
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    WeatherModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
