
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class HelperService {
    constructor(private readonly configService: ConfigService,) { }

    // error status checker
    setErrorStatus(error) {
        let responseStatusCodes = this.configService.get('RESPONSE_STATUS_CODES');
        if (error.message.includes('Request failed with status code 401') || (error.message.includes('Invalid API key'))) {
            return responseStatusCodes.UNAUTHORIZED
        } else if (error.message == 'Request failed with status code 403') {
            return responseStatusCodes.FORBIDDERN
        }
        else {
            return responseStatusCodes.ERROR
        }
    }
    apiResponse({
        data = {},
        status = 1,
        errors = [],
        message = "",
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



}