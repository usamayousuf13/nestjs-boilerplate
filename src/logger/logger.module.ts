import { forwardRef, Module } from '@nestjs/common';
import { AppLogger } from './app-logger.service';
import { HelperModule } from '../util/helper/helper.module';
@Module({
    // using forwardRef to avoid circular dependency error with HelperModule
    imports: [forwardRef(() => HelperModule)],
    providers: [AppLogger],
    exports: [AppLogger],
})
export class LoggerModule { }