## Description

IPL Dashboard webapp with React frontend, Node backend that uses Nest framework ( [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.)
Front end code is available here: https://github.com/gauravk79/ipl-dashboard-frontend

After building the frontend code, copy contents of its build directory into the client folder of this repo - https://github.com/gauravk79/nestjs-ipl-dashboard/tree/main/client.

## Motivation and Credits

This application was developed as part of following up on fullstack tutorial from Koushik Kothagal.
https://github.com/koushikkothagal/ipl-dashboard
In the tutorial, the backend is with Java Spring Boot and deploys to AWS. However, I choose to implement it in NodeJS using nest framework, and deployed it to Heroku: https://iplinfo.herokuapp.com/ (check it out!)

I also editied front end with different fonts and Team images.
Data for IPL matches is from https://www.kaggle.com/patrickb1912/ipl-complete-dataset-20082020?select=IPL+Matches+2008-2020.csv

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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

[MIT licensed](LICENSE).
