# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the built React app to the container
COPY . .

# Expose the port that the app will run on (default for React is 3000)
EXPOSE 3000

# Start the app when the container runs
CMD ["npm", "start"]
