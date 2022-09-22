/*  
    -   All application level helper functions reside here
    -   Need to be imported in feature module file in imports section,
        then create instance of helperService by defining in constructor parameter 
        of any other controller or service as:
            private readonly helperService: HelperService
        
*/

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
  ErrorLogs,
  ErrorLogsDocument,
} from '../../../mongoose/schema/error-logs.schema';

@Injectable()
export class HelperService {
  constructor(
    private readonly configService: ConfigService,
    @InjectModel(ErrorLogs.name)
    private readonly errorLogsModel: Model<ErrorLogsDocument>,
  ) {}

  // error status checker
  setErrorStatus(error) {
    const responseStatusCodes = this.configService.get('RESPONSE_STATUS_CODES');
    if (
      error.message.includes('Request failed with status code 401') ||
      error.message.includes('Invalid API key')
    ) {
      return responseStatusCodes.UNAUTHORIZED;
    } else if (error.message == 'Request failed with status code 403') {
      return responseStatusCodes.FORBIDDERN;
    } else {
      return responseStatusCodes.ERROR;
    }
  }

  // Generic API response object with pagination and errors to be used application wide
  apiResponse({
    data = {},
    status = 1,
    errors = [],
    message = '',
    pagination = null,
  }) {
    return {
      data,
      status,
      errors,
      message,
      pagination,
    };
  }

  // calls ORM create function to write error log in DB
  logErrorToDB(errorObject) {
    this.errorLogsModel.create(errorObject);
  }
}
