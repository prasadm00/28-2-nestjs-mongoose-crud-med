<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

1. Start the mongodb.

2. Run the app.

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


## Developing the app

1. Create app
`nest new nestjs-mongodb-crud`

2. Install mongoose
`npm install --save @nestjs/mongoose mongoose`

3. Configure mongoose in project

`@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017',{dbName: 'studentdb'}),
  ],
})`

4. Create mongoose schema

5. Create Interface

6. Create DTO
`npm install class-validator --save
npm install class-transformer --save`

7. Creating the Service:
`nest generate service student`

8. Creating the Controller: for routes
`nest generate controller student`
