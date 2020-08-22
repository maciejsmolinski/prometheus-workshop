FROM node:alpine

COPY metrics.js .

CMD ["node", "metrics.js"]
