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

## Development Guidelines

- Follow Svelte's conventions for reactivity and component structure
- Use Tailwind utility classes for all styling (utility-first approach)
- Implement Solid POD authentication and data storage
- Ensure responsive layouts and accessibility compliance

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