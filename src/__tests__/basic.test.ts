import { describe, it, expect } from '@jest/globals';

describe('Basic Configuration Tests', () => {
  it('should have correct environment setup', () => {
    expect(process.env.NODE_ENV).toBeDefined();
  });

  it('should validate basic math operations', () => {
    expect(2 + 2).toBe(4);
    expect(10 - 5).toBe(5);
    expect(3 * 4).toBe(12);
    expect(8 / 2).toBe(4);
  });

  it('should handle string operations', () => {
    const greeting = 'Hello';
    const name = 'World';
    expect(`${greeting} ${name}`).toBe('Hello World');
  });

  it('should validate array operations', () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(numbers.length).toBe(5);
    expect(numbers.includes(3)).toBe(true);
    expect(numbers.filter(n => n > 3)).toEqual([4, 5]);
  });
});
