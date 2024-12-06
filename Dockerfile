# Step 1: Build the React app
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Install dependencies and build the app
COPY package*.json ./
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the Vite project
RUN npm run build

# Step 2: Serve the built project
FROM node:18 AS runner

# Set working directory
WORKDIR /app

# Install a simple static file server
RUN npm install -g serve

# Copy the build output from the builder stage
COPY --from=builder /app/dist /app

# Expose port 80
EXPOSE 80

# Command to serve the app
CMD ["serve", "-s", "dist", "-l", "80"]