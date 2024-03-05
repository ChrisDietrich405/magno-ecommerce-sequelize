FROM node:alpine 

WORKDIR /react-app

COPY package.json .

RUN npm install 

COPY . .

# 3000 isn't referring to the container, it's referring to the local machine
EXPOSE 3000 

CMD ["npm", "start"]