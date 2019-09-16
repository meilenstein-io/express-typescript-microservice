<div align="center">

# Minimalistic Express Boilerplate with TypeScript and Live Debugging

![](express-typescript-microservice.png)

## Perfect for microservices.

</div>

![](https://img.shields.io/github/issues/meilenstein-io/express-typescript-microservice.svg) ![](https://img.shields.io/github/license/meilenstein-io/express-typescript-microservice.svg) ![](https://img.shields.io/twitter/url/https/github.com/meilenstein-io/express-typescript-microservice.svg?style=social)

---

### Pre-Configured:

- NodeJS
- Express
- TypeScript
- Live Debugging
- Winston (Logs)
- Docker
- Docker-Compose

### Pre-Installed:

- Body-Parser
- CORS
- Request

### Getting Started:

#### Run on Your Machine:

```sh
# install the npm modules
yarn install

# start the live server
yarn start

# test if it worked out:
curl http://localhost:1234/weather/nyc
```

#### Run as Docker Container:

```sh
# if you are running it for the first time:
yarn docker:setup

# to stop the microservice:
yarn docker:stop

# to start the microservice again:
yarn docker:start

# test if it worked out:
curl http://localhost:1234/weather/nyc
```

---

### Questions?

Contact us at [meilenstein.io](https://meilenstein.io).
