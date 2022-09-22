/* 
    -   Contains utility functions for application logger
    -   Transient providers are not shared across consumers. Each consumer 
        that injects a transient provider will receive a new, dedicated instance.

*/

import { Injectable, Scope, ConsoleLogger } from '@nestjs/common';
import { HelperService } from '../util/helper/helper.service';
@Injectable({ scope: Scope.TRANSIENT })
export class AppLogger extends ConsoleLogger {
  constructor(private readonly helperService: HelperService) {
    // required for constructor of derived classes
    super();
  }

  // Creates object for helper function that save error logs in DB.
  saveErrorLog(data: any = '', status = 500, error: any = '', message = '') {
    const errorObject = {
      // safe check to avoid parsing errors
      data:
        typeof data === 'string' || data instanceof String
          ? data
          : JSON.stringify(data),
      status,
      error:
        typeof error === 'string' || error instanceof String
          ? error
          : JSON.stringify(error),
      message,
      timestamp: Date.now(),
    };
    this.helperService.logErrorToDB(errorObject);
  }
}
