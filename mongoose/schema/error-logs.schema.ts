/* 
    Generic error logs schema
    Import in any feature module file as:
    - MongooseModule.forFeature([{ name: ErrorLogs.name, schema: ErrorLogsSchema }
*/

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ErrorLogsDocument = ErrorLogs & Document;

@Schema()
export class ErrorLogs {
  @Prop()
  data: string;

  @Prop()
  status: string;

  @Prop()
  error: string;

  @Prop()
  message: string;

  @Prop()
  timestamp: string;
}

export const ErrorLogsSchema = SchemaFactory.createForClass(ErrorLogs);
