FROM node:alpine 

WORKDIR /code
COPY package*.json . 
# run command 
RUN npm ci
# copy from source to destination

COPY  . .
CMD ["npm", "start"]