export default () => ({
    /* 
        - This file has module wise constant variables
        - Each module have 1 object, same as the module name
        - This way we can get all the constants needed in a single module by calling 1 get function
    */
    WEATHER: {
        WEATHER_FORCAST: 'http://api.openweathermap.org/data/2.5/forecast',
        APP_ID: process.env.APP_ID
    }

});