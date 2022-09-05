import { forwardRef, Module } from '@nestjs/common';
import { HelperService } from './helper.service';
import { LoggerModule } from '../../logger/logger.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ErrorLogs, ErrorLogsSchema } from '../../../mongoose/schema/error-logs.schema';
@Module({
    imports: [forwardRef(() => LoggerModule),
    MongooseModule.forFeature([{ name: ErrorLogs.name, schema: ErrorLogsSchema },
    ])],
    providers: [HelperService],
    exports: [HelperService],
})
export class HelperModule { }