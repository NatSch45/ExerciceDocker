FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app /app
EXPOSE 3000
CMD ["node", "server.js"]

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/health || exit 1