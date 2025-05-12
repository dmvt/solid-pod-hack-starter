import { defineConfig, loadEnv } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [svelte()],
    // Expose environment variables in Vite
    define: {
      // By default, Vite exposes import.meta.env.VITE_*
      // This adds additional env vars needed by our application
      'import.meta.env.VITE_MODE': JSON.stringify(mode),
      'import.meta.env.VITE_APP_NAME': JSON.stringify(env.VITE_APP_NAME || 'Solid Pod Hack'),
      'import.meta.env.VITE_SOLID_POD_SERVER': JSON.stringify(env.VITE_SOLID_POD_SERVER || 'http://localhost:3000'),
      'import.meta.env.VITE_API_TIMEOUT': JSON.stringify(env.VITE_API_TIMEOUT || '30000')
    },
    // Handle .env.* files
    envPrefix: 'VITE_',
  };
});