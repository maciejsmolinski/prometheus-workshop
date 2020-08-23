FROM node:alpine

WORKDIR /app

COPY metrics.js .

RUN npm install -g nodemon

CMD ["nodemon", "metrics.js"]
