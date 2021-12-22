# installs from top to bottom

FROM node:16

WORKDIR /class_build/
COPY ./package.json /class_build/
COPY ./yarn.lock /class_build/
RUN yarn install

COPY . /class_build/
# vscode에 class_build 에 있는 내용을 도커 클래스_빌드라는곳에다가 다 넣어줘

RUN yarn build:ssr

# CMD is the execution word 
CMD yarn start

# 복사 한 다음에 설치하고 실행까지