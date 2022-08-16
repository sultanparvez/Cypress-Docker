FROM cypress/base:16.14.2

RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install

RUN $(npm bin)/cypress verify

RUN ["npm", "test"]


