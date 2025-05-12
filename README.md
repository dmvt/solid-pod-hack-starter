# Solid Pod Hack Starter

A frontend starter project using:
- **Svelte 5** (latest features)
- **Tailwind CSS** (utility-first styling)
- **Solid PODs** (decentralized data storage and user identity)

This repository serves as the frontend component for the Solid Pod Hack project.

## Features

- Modern Svelte 5 reactive components
- Responsive design with Tailwind CSS
- Integration with Solid PODs for decentralized data storage
- User authentication via WebID/OIDC login
- Accessibility-focused UI components
- Robust environment variable handling

## Development Guidelines

- Follow Svelte's conventions for reactivity and component structure
- Use Tailwind utility classes for all styling (utility-first approach)
- Implement Solid POD authentication and data storage
- Ensure responsive layouts and accessibility compliance

## Configuration

The application uses environment variables for configuration. A template file `.env.example` is provided with all available configuration options:

| Variable | Description | Default |
|----------|-------------|---------|
| `SOLID_IDENTITY_PROVIDER` | URL of the Solid Identity Provider used for auth flows | https://login.inrupt.com |
| `LOCAL_SOLID_POD` | Local Solid Pod base URL (the `solid-pod` service in Docker) | http://solid-pod:3000 |
| `DEV_PORT` | Port the dev server runs on (mirrors docker-compose) | 7000 |
| `NODE_ENV` | Node environment (development, production, test) | development |
| `BASE_URL` | Base URL for the application | http://localhost:7000 |
| `DEBUG_AUTH` | Optional: Debugging flags for authentication | false |
| `DEBUG_POD_OPERATIONS` | Optional: Debugging flags for Pod operations | false |
| `API_TIMEOUT` | Optional: Timeout duration for API requests in milliseconds | 5000 |
| `STRICT_MODE` | Optional: Enable strict mode for solid-client | false |
| `DEFAULT_LANGUAGE` | Optional: Default language for the application | en |

### Setting Up Environment Variables

1. When running for the first time, copy the example file to create your `.env` file:
   ```bash
   pnpm env:init
   ```
   This will be done automatically when starting with Docker.

2. Edit the `.env` file with your specific configuration values.

3. The application will validate required environment variables at startup and fail fast if any are missing.

## Getting Started

### Using Docker (Recommended)

The project includes Docker configuration for easy development setup with both the frontend application and a local Solid Pod server.

#### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

#### Running the Development Environment

1. Clone the repository:
   ```bash
   git clone https://github.com/dmvt/solid-pod-hack-starter.git
   cd solid-pod-hack-starter
   ```

2. Start the Docker containers:
   ```bash
   docker compose up --build
   ```

3. Access the application:
   - Frontend application: [http://localhost:7000](http://localhost:7000)
   - Solid Pod server: [http://localhost:3000](http://localhost:3000)

The Docker setup includes:
- Node 22.15 environment
- Hot-reloading development server
- Local Solid Pod server (Community Solid Server) for authentication and data storage
- Volume mounting for real-time code changes

#### Stopping the Environment

To stop the Docker containers:
```bash
docker compose down
```

### Manual Setup

If you prefer to run the application without Docker:

1. Make sure you have Node.js 22.15 or later and pnpm installed
2. Clone the repository
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Start the development server:
   ```bash
   pnpm dev
   ```

You'll also need to set up a Solid Pod server separately for full functionality.

## Production Deployment

For production deployments, follow these best practices for managing environment variables:

### Using Docker Compose

1. Create a separate `docker-compose.prod.yml` file:
   ```yaml
   services:
     app:
       env_file: /path/to/secure/.env.production
       # Or use Docker secrets
       environment:
         - NODE_ENV=production
       # Other production settings

     solid-pod:
       env_file: /path/to/secure/.env.production
       # Other production settings
   ```

2. Mount secrets securely:
   - Use Docker secrets or Kubernetes secrets for sensitive data
   - Never commit production environment files to version control
   - Consider using a secrets management service for sensitive values

3. Deploy using the production configuration:
   ```bash
   docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
   ```

### Security Considerations

- Ensure all API keys and secrets are properly secured
- Set appropriate permissions for `.env` files (e.g., `600`)
- Use HTTPS for all communication
- Validate environment variables at startup
- Configure appropriate resource limits in Docker Compose

### Monitoring

- Set up health checks to monitor the application status
- Configure logging to capture environment-related issues
- Implement alerting for missing or invalid configuration