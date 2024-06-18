# Build the React application
FROM node:14 AS Build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

# Serve the application using a simple server
FROM node:14
WORKDIR /app
COPY --from=build /app/build .
RUN npm install -g serve
CMD ["serve", "-s", ".", "-l", "3000"]