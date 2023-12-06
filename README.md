# NodeJS server with Typescript, express example

### Requirements
- It requires NODE v13.2.0 or above to run in your machine.
- Please add .env file with variables available in .env.sample file at root of the project.

## Setup
- Init Package.json using below command
```sh
npm init -y
```
- Install express, node, typescript, ts-node, tslib as Dev dependencies.
```sh
npm i -D @types/express @types/node nodemon typescript ts-node tslib
```
- Create tsconfig.json file.
```sh
npx tsc --init
```
- Configure tsconfig.json according to your needs or take example from this project.
- Create a src directory and your main app.ts/index.ts file in it.


## Installation
Install the dependencies and devDependencies and start the server.
```sh
npm i
```
## Run in development mode
```sh
npm run dev
```

## Directly run in typescript language (This will not convert your app to javascript in dist folder)
```sh
npm start
```

## Run in production mode
```sh
npm run prod
```