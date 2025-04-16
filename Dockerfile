FROM node:8.17.0 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8082
ENV NODE_ENV=production
CMD ["npm", "start"]