# Install dependencies only when needed
FROM node:lts AS deps
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM node:lts AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN apt-get update
RUN apt-get install -y openssl

RUN npx prisma generate
RUN npm run build

EXPOSE 3000

ENV PORT 3000

RUN chmod +x bootstrap.sh
CMD ["./bootstrap.sh"]