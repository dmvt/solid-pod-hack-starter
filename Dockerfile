# Multi-stage build for Svelte 5 + Tailwind CSS frontend with Solid PODs integration

# ===== BUILDER STAGE =====
FROM node:18-slim AS builder

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies using pnpm with caching
RUN --mount=type=cache,target=/root/.pnpm-store \
    if [ -f pnpm-lock.yaml ]; then \
        pnpm install --frozen-lockfile; \
    else \
        pnpm install; \
    fi

# Copy the rest of the application code
COPY . .

# Build the application
RUN pnpm build

# ===== RUNTIME STAGE =====
FROM node:18-slim AS runtime

# Set working directory
WORKDIR /app

# Create a non-root user and switch to it
RUN groupadd -r appuser && useradd -r -g appuser appuser

# Install pnpm
RUN npm install -g pnpm

# Copy built artifacts from builder stage
COPY --from=builder --chown=appuser:appuser /app/node_modules ./node_modules
COPY --from=builder --chown=appuser:appuser /app/dist ./dist
COPY --from=builder --chown=appuser:appuser /app/package.json ./package.json

# Switch to non-root user
USER appuser

# Expose port for the application
EXPOSE 7000

# Start the application
CMD ["pnpm", "start"]