FROM node:22-slim AS base

WORKDIR /app

# Copy project files.
COPY app/package*.json ./
COPY app .

# Install dependencies.
RUN npm install

# Expose the port the app runs on.
EXPOSE 3000

# ---------------
# -----PROD------
#----------------
FROM base AS prod 

RUN npm run build

# Start the Next.js app.
CMD ["npm", "run", "start"]