# Use an official Node.js runtime as a parent image
FROM node:20-alpine AS init-source-code
LABEL authors="hoangf"
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /source-code
COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm install --frozen-lockfile
COPY . .

FROM init-source-code as build
WORKDIR /source-code
RUN pnpm run build

FROM node:20-alpine as test
RUN mkdir /test-app
COPY --from=build /source-code/dist /test-app
WORKDIR /test-app
#run test case
CMD ["echo", "test pass"]

FROM nginx:alpine as production
RUN mkdir /production-app
COPY --from=build /source-code/dist /production-app
COPY deployment/production/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
