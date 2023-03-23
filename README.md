## 💻 QRCODE GENERATOR BACKEND

#### Project details and some notes

<span>
The project is made in express, a node.js framework well known by the community. In this project, SOLID's single responsibility principles were applied. I decided not to apply tests because it is not something I have mastered yet, but I have already used it in several projects on my github, the application is not completely decoupled from technology but I am currently studying for it, there are also dissociation projects and micro-services on my github.</span>
<br/>
<span>
The project has a simple folder structure but I am also able to create scalable folder structures and adapt to the folders used by any team
</span>
<br/>

## Clone the project:

```bash
git clone https://github.com/kauan777/back-qrcode-generator.git
```

<br/>

## Create the database in your Postgresql or Docker

```mysql
  CREATE DATABASE db_qrcode_kauan;
```

<br/>

## Add an .env file at the root of your project with the information below

```.env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:PORT/db_qrcode_kauan?schema=public"
```

 <br/>

## Replace the information in the .env file with your own:

```js
// USER = Username (usually is postgres)

// PASSWORD = Your password
// If your password has a special character, replace it according to the site: https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding

// PORT = Port that your Postgres is running (by default it is 5432)
```

<br/>

## Install the dependencies

```bash
npm install
# or
yarn install
```

<br/>

## Run the migration

```bash
npm run migrate
# or
yarn migrate
```

<br/>

## Ready!

```bash
npm run dev
# or
yarn dev
```
