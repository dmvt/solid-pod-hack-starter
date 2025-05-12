// Simple script to run the tests without TypeScript dependencies
const { execSync } = require('child_process');

try {
  console.log('Running tests...');
  execSync('jest', { stdio: 'inherit' });
  console.log('Tests completed successfully');
} catch (error) {
  console.error('Tests failed:', error.message);
  process.exit(1);
}