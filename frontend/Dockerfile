FROM node:alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM node:alpine
EXPOSE 3000
COPY ./nginx/default.conf ./etc/nginx/con.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html