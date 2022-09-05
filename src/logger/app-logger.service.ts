import { Injectable, Scope, ConsoleLogger } from '@nestjs/common';
import { HelperService } from '../util/helper/helper.service';

@Injectable({ scope: Scope.TRANSIENT })
export class AppLogger extends ConsoleLogger {
    constructor(private readonly helperService: HelperService) {
        super();
    }
    customLog(data: any = '', status = 500, error: any = '', message = '') {
        let errorObject = {
            data: typeof data === 'string' || data instanceof String
                ? data
                : JSON.stringify(data),
            status,
            error: typeof error === 'string' || error instanceof String
                ? error
                : JSON.stringify(error),
            message
        }
        this.helperService.logErrorToDB(errorObject);
    }
}