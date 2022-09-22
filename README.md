# nestjs-boilerplate
Easy to use and dynamic NestJS boilerplate, helps quickly start working on a project with best practices and reduces time in developing the most obvious utilities in a project

## Pre-requisites

* Make sure you have latest version of nodejs installed on your system (https://nodejs.org/en/download/)
* MongoDB  (https://www.mongodb.com/docs/manual/administration/install-community/)
* You can also use mongoDB Atlas (cloud) https://www.mongodb.com/atlas/database
* Any code editor, I prefer using VScode
* Your own api key from https://openweathermap.org/ 


### .env file

Create a file namely .env in project root and add the following content in it:

```bash
APP_ID=YOUR_OPEN_WEATHER_API_KEY_HERE
APP_PORT=3001
MONGO_URL=mongodb://localhost:27017/weather
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
