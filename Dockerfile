FROM node:22-slim

WORKDIR /app

# Copy project files.
COPY app/package*.json ./
COPY app .

# Install dependencies.
RUN npm install

# Expose the port the app runs on.
EXPOSE 3000

# Start the Next.js app.
CMD ["npm", "run", "dev"]