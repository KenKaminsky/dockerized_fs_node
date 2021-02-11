# Step 1
# pull official base image
FROM node:15.8.0-alpine3.10 as build-step

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json .

# Installs all node packages
RUN yarn install

# add app
COPY . .

ENV REACT_APP_BASE_URL http://localhost:5000/graphql

# Uses port which is used by the actual application
EXPOSE 8080

# start app
CMD ["yarn", "build"]

# Stage 2
FROM nginx:1.19.6-alpine
COPY --from=build-step /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]