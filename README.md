# WhomstBot

Telegram bot used for determining Steam friends online status.

## Building & Running

### Locally

Install all dependencies

```shell
npm install
```

Transpile Typescript to Javascript

```shell
npm run build
```

Alternately, 

```shell
tsc src/bot.ts
```

Run the Bot

```shell
npm start
```

Alternately,

```shell
node src/bot.js
```

### Docker

Build the Docker image

```shell
docker build -t whomstison .
```

Run the Docker image

```shell
docker run -d whomstison
```

