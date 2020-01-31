#### Stage 1: Build the react application
FROM node:12.2.0-alpine AS build

# Configure the main working directory inside the docker image.
WORKDIR /usr/public

# Copy the package.json as well as the package-lock.json and install the dependencies.
COPY package*.json ./
#RUN node -v
RUN npm -v

RUN npm install

# Copy the main application
COPY . ./

# Build the application
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

