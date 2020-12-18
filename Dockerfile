#base image
FROM node:13.12.0-alpine

#working directory
WORKDIR /app

#add node_modules/.bin to $PATH
ENV PATH /app/node_modules/.bin:$PATH

#install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

#start app
CMD ["npm", "start"]