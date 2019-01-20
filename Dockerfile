FROM node:10.13-alpine
ENV NODE_ENV production

RUN apk add yarn
RUN npm i -g typescript tsc tslint

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN yarn install

# Bundle app source
COPY . /usr/src/app
RUN yarn build

EXPOSE 3000
CMD yarn watch-node