import { isEnvVarSet, getMissingVars, validateEnv } from './check-env';

// Mock console.error to capture output
const mockConsoleError = jest.fn();
const originalConsoleError = console.error;

beforeEach(() => {
  // Reset the mock before each test
  mockConsoleError.mockReset();
  console.error = mockConsoleError;
  
  // Clear environment variables for each test
  delete process.env.SOLID_IDENTITY_PROVIDER;
  delete process.env.LOCAL_SOLID_POD;
  delete process.env.NODE_ENV;
  delete process.env.DEV_PORT;
});

afterAll(() => {
  // Restore original console.error
  console.error = originalConsoleError;
});

describe('Environment Variable Validation', () => {
  describe('isEnvVarSet', () => {
    test('should return false for undefined variables', () => {
      expect(isEnvVarSet('UNDEFINED_VAR')).toBe(false);
    });

    test('should return false for empty variables', () => {
      process.env.EMPTY_VAR = '';
      expect(isEnvVarSet('EMPTY_VAR')).toBe(false);
    });

    test('should return true for set variables', () => {
      process.env.SET_VAR = 'value';
      expect(isEnvVarSet('SET_VAR')).toBe(true);
    });
  });

  describe('getMissingVars', () => {
    test('should return all mandatory variables when none are set', () => {
      const missingVars = getMissingVars();
      expect(missingVars).toContain('SOLID_IDENTITY_PROVIDER');
      expect(missingVars).toContain('LOCAL_SOLID_POD');
      expect(missingVars).toContain('NODE_ENV');
      expect(missingVars).toContain('DEV_PORT');
      expect(missingVars.length).toBe(4);
    });

    test('should return only missing variables when some are set', () => {
      process.env.SOLID_IDENTITY_PROVIDER = 'https://login.inrupt.com';
      process.env.NODE_ENV = 'development';
      
      const missingVars = getMissingVars();
      expect(missingVars).toContain('LOCAL_SOLID_POD');
      expect(missingVars).toContain('DEV_PORT');
      expect(missingVars.length).toBe(2);
    });

    test('should return empty array when all variables are set', () => {
      process.env.SOLID_IDENTITY_PROVIDER = 'https://login.inrupt.com';
      process.env.LOCAL_SOLID_POD = 'http://localhost:3000';
      process.env.NODE_ENV = 'development';
      process.env.DEV_PORT = '7000';
      
      const missingVars = getMissingVars();
      expect(missingVars.length).toBe(0);
    });
  });

  describe('validateEnv', () => {
    test('should return false and log errors when variables are missing', () => {
      const result = validateEnv();
      
      expect(result).toBe(false);
      expect(mockConsoleError).toHaveBeenCalled();
    });

    test('should return true when all variables are set', () => {
      process.env.SOLID_IDENTITY_PROVIDER = 'https://login.inrupt.com';
      process.env.LOCAL_SOLID_POD = 'http://localhost:3000';
      process.env.NODE_ENV = 'development';
      process.env.DEV_PORT = '7000';
      
      const result = validateEnv();
      
      expect(result).toBe(true);
      expect(mockConsoleError).not.toHaveBeenCalled();
    });
  });
});