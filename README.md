<div align="center">

# Minimalistic Express Boilerplate with TypeScript and Live Debugging

<img src="express-typescript-microservice.png" />

## Perfect for microservices.

</div>

---

### Pre-Configured:

- NodeJS
- Express
- TypeScript
- Live Debugging
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
curl http://localhost:3000/weather/nyc
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
curl http://localhost:3000/weather/nyc
```

---

### Questions?

Contact us at [meilenstein.io](https://meilenstein.io)
