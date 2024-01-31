FROM node:20.10.0

WORKDIR /frontend
EXPOSE 3000


COPY . /

RUN npm install
CMD npm run dev