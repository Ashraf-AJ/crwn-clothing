FROM node:14-alpine

WORKDIR /frontend

COPY package.json package-lock.json /frontend/
RUN npm install
RUN npm install react-scripts -g 

ARG REACT_APP_API_HOST
ARG REACT_APP_API_PORT

ENV REACT_APP_API_HOST=${REACT_APP_API_HOST}
ENV REACT_APP_API_PORT=${REACT_APP_API_PORT}

COPY . /frontend/
