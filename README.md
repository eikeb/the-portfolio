# the:portfolio

## Getting Started

### Server Installation

Clone the repo:

```bash
git clone git@github.com:eikeb/the-portfolio.git
cd the-portfolio\server
```

Install dependencies:

```bash
npm install
```

Set environment variables:

```bash
cp .env.example .env
# Open .env and set the environment variables accordingly
```

### Commands

Running locally:

```bash
npm run start:dev
```

Running in production:

```bash
npm start
```

Unit and integration tests:

```bash
# Run all tests
npm run test

# Run all tests in watch mode
npm run test:watch

# Run test coverage
npm run coverage
```

Linting:

```bash
# Run ESLint
npm run lint

# Fix ESLint errors
npm run lint:fix

# Run prettier
npm run prettier

# Fix prettier errors
npm run prettier:fix
```

## Project Structure

```
client\             # Vue.js client application
 |--src\         
   |--...
   |--App.vue       # Main application component
   |--main.js       # App entry point

server\             # Node.js REST API 
 |--src\            
   |--config\       # Environment variables and configuration related things
   |--controllers\  # Route controllers (controller layer)
   |--docs\         # Swagger files
   |--middlewares\  # Custom express middlewares
   |--models\       # Mongoose models (data layer)
   |--routes\       # Routes
   |--services\     # Business logic (service layer)
   |--utils\        # Utility classes and functions
   |--validations\  # Request data validation schemas
   |--app.js        # Express app
   |--index.js      # App entry point
 |--tests\          
   |--fixtures      # Test data fixtures
   |--integration   # Integration tests
   |--unit          # Unit tests
   |--utils         # Test utility functions
```

## Technology Stack

- **ES9**: latest ECMAScript features
- **NoSQL database**: [MongoDB](https://www.mongodb.com) object data modeling using [Mongoose](https://mongoosejs.com)
- **Authentication and authorization**: using [passport](http://www.passportjs.org)
- **Validation**: request data validation using [Joi](https://github.com/hapijs/joi)
- **Logging**: using [winston](https://github.com/winstonjs/winston) and [morgan](https://github.com/expressjs/morgan)
- **Testing**: unit and integration tests using [Jest](https://jestjs.io)
- **Error handling**: centralized error handling mechanism
- **API documentation**: with [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc) and [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)
- **Process management**: advanced production process management using [PM2](https://pm2.keymetrics.io)
- **Dependency management**: with [Yarn](https://yarnpkg.com)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
- **Security**: set security HTTP headers using [helmet](https://helmetjs.github.io)
- **Santizing**: sanitize request data against xss and query injection
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Compression**: gzip compression with [compression](https://github.com/expressjs/compression)
- **CI**: continuous integration with [Travis CI](https://travis-ci.org)
- **Docker support**
- **Code coverage**: using [coveralls](https://coveralls.io)
- **Code quality**: with [Codacy](https://www.codacy.com)
- **Git hooks**: with [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)
- **Editor config**: consistent editor configuration using [EditorConfig](https://editorconfig.org)

## Linting

Linting is done using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io).

In this app, ESLint is configured to follow the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) with some modifications. It also extends [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to turn off all rules that are unnecessary or might conflict with Prettier.

To modify the ESLint configuration, update the `.eslintrc.json` file. To modify the Prettier configuration, update the `.prettierrc.json` file.

To prevent a certain file or directory from being linted, add it to `.eslintignore` and `.prettierignore`.

To maintain a consistent coding style across different IDEs, the project contains `.editorconfig`

## Inspirations

- [hagopj13/node-express-mongoose-boilerplate](https://github.com/hagopj13/node-express-mongoose-boilerplate)

## License

[MIT](LICENSE)