FROM node:9.2.0-slim
ENV INSTALL_PATH /onbitforms-client
RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN yarn add @angular/cli
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH
COPY . .
RUN yarn install
CMD ["yarn", "start"]