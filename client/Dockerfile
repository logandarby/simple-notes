FROM node:14.17.4
WORKDIR /client
RUN yarn global add serve
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
ENV PORT=3000
EXPOSE 3000
CMD [ "yarn", "run", "serve" ]

