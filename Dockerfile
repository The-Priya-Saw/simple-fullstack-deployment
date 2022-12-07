FROM node:19.2.0
WORKDIR /app
COPY . /app
RUN npm install
CMD ["npm", "start"]
EXPOSE 3000
