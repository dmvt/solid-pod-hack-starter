/**
 * Environment File Initializer
 * 
 * This script copies .env.example to .env if .env doesn't exist yet.
 * It also prints a reminder to edit the values in the .env file.
 */

import * as fs from 'fs';
import * as path from 'path';

const rootDir = path.resolve(__dirname, '..');
const envExamplePath = path.join(rootDir, '.env.example');
const envPath = path.join(rootDir, '.env');

/**
 * Copies the .env.example file to .env if .env doesn't exist
 * @returns true if a new .env file was created, false if it already existed
 */
export function initEnvFile(): boolean {
  try {
    // Check if .env already exists
    if (fs.existsSync(envPath)) {
      console.log('🔍 .env file already exists. No changes made.');
      return false;
    }

    // Check if .env.example exists
    if (!fs.existsSync(envExamplePath)) {
      console.error('\x1b[31m%s\x1b[0m', '❌ Error: .env.example file not found.');
      return false;
    }

    // Copy .env.example to .env
    fs.copyFileSync(envExamplePath, envPath);
    
    console.log('\x1b[32m%s\x1b[0m', '✅ Created .env file from .env.example');
    console.log('\x1b[33m%s\x1b[0m', '⚠️  IMPORTANT: Review and update the values in your .env file before running the application.');
    
    return true;
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', `❌ Error initializing .env file: ${error}`);
    return false;
  }
}

// Only run when executed directly (not when imported)
if (require.main === module) {
  initEnvFile();
}