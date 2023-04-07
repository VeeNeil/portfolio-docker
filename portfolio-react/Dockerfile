FROM node:alpine 

WORKDIR /app
COPY package*.json . 
# run command 
RUN npm install
# copy from source to destination
ENV REACT_APP_NAME=myName
COPY  . .
EXPOSE 3000
CMD ["npm", "start", "--reload"]