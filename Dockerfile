FROM node:9.2.0-slim
ENV INSTALL_PATH /onbitformsclient
RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN yarn global add --no-lockfile @angular/cli
RUN ng set --global packageManager=yarn
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH
COPY . .
RUN yarn install
CMD ["yarn", "start"]