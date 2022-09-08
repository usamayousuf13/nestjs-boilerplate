/* 
        - This file has module wise constant variables
        - Each module should have 1 object, same as the module name
        - This way we can get all the constants needed in a single module by calling 1 get function
        - The file is part of nestJs config module, see file `src/app.module.ts` for details.
        - Requires ConfigService instance to be created in contructor parameter as:
            private readonly configService: ConfigService
        - Syntax of calling get function to use constant values is as follows:
            this.configService.get('WEATHER')
    */


export default () => ({

    WEATHER: {
        WEATHER_FORCAST: 'http://api.openweathermap.org/data/2.5/forecast',
        APP_ID: process.env.APP_ID
    },
    RESPONSE_STATUS_CODES: {
        SUCCESS: 200,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDERN: 403,
        NOT_FOUND: 404,
        ERROR: 500,
        AUTH_CHALLENGE: 201
    },

});