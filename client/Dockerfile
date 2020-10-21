FROM node:12
WORKDIR /usr/src/app/client
COPY package*.json ./
RUN npm install
COPY . .

CMD [ "npm", "start" ]