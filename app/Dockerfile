FROM node:22-slim AS base

WORKDIR /usr/src/app

# Install AWS CLI v2
RUN apt-get update && apt-get install -y \
    curl \
    unzip \
    && curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
    && unzip awscliv2.zip \
    && ./aws/install \
    && rm -rf aws awscliv2.zip

# Verify AWS CLI installation
RUN aws --version

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