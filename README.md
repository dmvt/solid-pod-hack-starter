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
- Environment variable configuration for different deployment scenarios

## Development Guidelines

- Follow Svelte's conventions for reactivity and component structure
- Use Tailwind utility classes for all styling (utility-first approach)
- Implement Solid POD authentication and data storage
- Ensure responsive layouts and accessibility compliance
- Use environment variables for configuration management

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
4. Configure environment variables by creating a `.env.local` file based on `.env.example`
5. Start the development server:
   ```bash
   pnpm dev
   ```

You'll also need to set up a Solid Pod server separately for full functionality.

## Environment Variables

The application uses environment variables for configuration. These are managed through Vite's environment variable system, which uses the file-based approach.

### Available Environment Files

- `.env`: Default environment variables loaded in all cases
- `.env.development`: Development environment variables (loaded when running in development mode)
- `.env.production`: Production environment variables (loaded when building for production)
- `.env.local`: Local overrides (gitignored for local development, takes precedence over other files)

### Configuration Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_SOLID_POD_SERVER` | URL of the Solid Pod server | `http://localhost:3000` |
| `VITE_MODE` | Application mode (`development` or `production`) | `development` |
| `VITE_API_TIMEOUT` | API request timeout in milliseconds | `30000` |
| `VITE_APP_NAME` | Application name for display | `Solid Pod Hack` |

### Using Environment Variables in Code

The application includes a configuration utility to access environment variables in a consistent way:

```javascript
import { env } from './config/env.js';

// Access environment variables through the env object
console.log(env.SOLID_POD_SERVER); // => The configured Solid Pod server URL
console.log(env.IS_DEV);          // => Boolean indicating development mode
console.log(env.API_TIMEOUT);     // => API timeout in milliseconds
```

This approach provides type safety, default values, and consistent access patterns throughout the application.