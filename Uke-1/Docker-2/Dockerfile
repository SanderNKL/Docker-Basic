FROM node:22-alpine

COPY package.json /app/
WORKDIR /app
RUN npm install

COPY src /app/src

CMD ["npm", "start"]