FROM node:alpine 

WORKDIR /code

COPY ./requirements.txt ./
# run command 
RUN npm install 
# copy from source to destination
COPY . ./src

CMD ["npm", "start"]