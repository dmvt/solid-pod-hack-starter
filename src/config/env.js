/**
 * Environment configuration utility for accessing environment variables
 * in a consistent way across the application.
 */

/**
 * Returns the value of the specified environment variable,
 * with fallback to the default value if not set.
 * 
 * @param {string} key - The environment variable key to retrieve
 * @param {string|null} defaultValue - The default value if the key is not found
 * @returns {string|null} - The value of the environment variable or the default
 */
export function getEnv(key, defaultValue = null) {
  // Use Vite's import.meta.env to access environment variables
  const value = import.meta.env[key];
  
  // Return the value if it exists, otherwise return the default value
  return value !== undefined ? value : defaultValue;
}

/**
 * Common environment configuration values used throughout the app
 */
export const env = {
  // Base URL for the API
  SOLID_POD_SERVER: getEnv('VITE_SOLID_POD_SERVER', 'http://localhost:3000'),
  
  // Development mode flag
  IS_DEV: getEnv('VITE_MODE', 'development') === 'development',
  
  // Production mode flag
  IS_PROD: getEnv('VITE_MODE', 'development') === 'production',
  
  // API timeout in milliseconds
  API_TIMEOUT: parseInt(getEnv('VITE_API_TIMEOUT', '30000'), 10),

  // Application name for display purposes
  APP_NAME: getEnv('VITE_APP_NAME', 'Solid Pod Hack'),
};