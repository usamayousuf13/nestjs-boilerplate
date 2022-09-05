/* 
    Simple weather schema
    used to store API response from third party weather API in mongoDB collection
*/

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WeatherDocument = Weather & Document;

@Schema()
export class Weather {

    @Prop()
    url: string;

    @Prop()
    response: string;

    @Prop()
    timestamp: string;

}

export const WeatherSchema = SchemaFactory.createForClass(Weather);