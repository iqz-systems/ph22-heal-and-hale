# Stage 0, "build-stage", based on Node.js, to build and compile react application
FROM us.gcr.io/iqz-apps/node:16.10-alpine as build-stage
# Set environment variables
ENV WORK_DIR /app/
# Set Working Directory
RUN mkdir -p $WORK_DIR
WORKDIR $WORK_DIR
# Set up app
COPY package*.json $WORK_DIR
RUN npm install
COPY . $WORK_DIR
# Build app
RUN npm run build


# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM us.gcr.io/iqz-apps/nginxinc/nginx-unprivileged:1.20.1-alpine

COPY --from=build-stage /app/build /usr/share/nginx/html

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
