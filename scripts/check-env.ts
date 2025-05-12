/**
 * Environment Variable Validator
 * 
 * This script checks that all required environment variables are set.
 * If any mandatory variables are missing, it logs an error and exits with code 1.
 */

const MANDATORY_VARS = [
  'SOLID_IDENTITY_PROVIDER',
  'LOCAL_SOLID_POD',
  'NODE_ENV',
  'DEV_PORT'
];

/**
 * Checks if an environment variable is set
 * @param varName - The name of the environment variable to check
 * @returns true if the variable is set and has a non-empty value, false otherwise
 */
export function isEnvVarSet(varName: string): boolean {
  const value = process.env[varName];
  return value !== undefined && value !== '';
}

/**
 * Gets a list of all missing mandatory environment variables
 * @returns An array of variable names that are missing
 */
export function getMissingVars(): string[] {
  return MANDATORY_VARS.filter(varName => !isEnvVarSet(varName));
}

/**
 * Main validation function
 * @returns true if all mandatory variables are set, false otherwise
 */
export function validateEnv(): boolean {
  const missingVars = getMissingVars();
  
  if (missingVars.length > 0) {
    console.error('\x1b[31m%s\x1b[0m', 'Error: Missing required environment variables:');
    missingVars.forEach(varName => {
      console.error('\x1b[31m%s\x1b[0m', `  - ${varName}`);
    });
    console.error('\x1b[31m%s\x1b[0m', '\nPlease set these variables in your .env file or environment.');
    console.error('\x1b[33m%s\x1b[0m', 'Tip: Run "pnpm env:init" to create a .env file from the template.');
    return false;
  }
  
  return true;
}

// Only run when executed directly (not when imported)
if (require.main === module) {
  const isValid = validateEnv();
  process.exit(isValid ? 0 : 1);
}