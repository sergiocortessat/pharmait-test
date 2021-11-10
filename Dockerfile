FROM node:14.18.1-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV REACT_APP_NAME=myName
EXPOSE 3000
CMD ["npm", "start"]
