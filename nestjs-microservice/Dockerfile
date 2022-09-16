FROM node:alpine

EXPOSE 8080
WORKDIR /usr/src/app

COPY package*.json tsconfig*.json ./
RUN npm install

COPY src/ src/

RUN npm run build

RUN rm -rf src/

CMD ["npm", "run", "start:prod"]