FROM ubuntu

WORKDIR /usr/src/app

COPY package.json ./

RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_11.x  | bash -
RUN apt-get -y install nodejs

COPY . .

CMD ["node","app.js"]

