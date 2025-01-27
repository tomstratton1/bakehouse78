FROM node:22-slim AS base

WORKDIR /usr/src/app

# Copy project files.
COPY package*.json ./

# Install dependencies.
RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

# Expose the port the app runs on.
EXPOSE 3000

# Start the Next.js app.
CMD ["npm", "run", "start"]