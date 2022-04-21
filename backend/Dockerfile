FROM node

WORKDIR /user/app

COPY package.json ./

RUN yarn

COPY . .

EXPOSE 3333

CMD ["yarn", "run", "dev"]