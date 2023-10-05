FROM node:18.18.0-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm run install-prod
COPY . .
CMD ["npm", "run", "start-prod"]


