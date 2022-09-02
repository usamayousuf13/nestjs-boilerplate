import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ErrorLogsDocument = ErrorLogs & Document;

@Schema()
export class ErrorLogs {

    @Prop()
    code: string;

    @Prop()
    message: string;

    @Prop()
    log: string;

    @Prop()
    timestamp: string;

}

export const ErrorLogsSchema = SchemaFactory.createForClass(ErrorLogs);