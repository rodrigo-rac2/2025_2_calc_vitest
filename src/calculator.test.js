import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './calculator.js';

describe('Calculator', () => {
  describe('add', () => {
    it('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('adds a positive and a negative number', () => {
      expect(add(5, -3)).toBe(2);
    });

    it('adds two negative numbers', () => {
      expect(add(-4, -6)).toBe(-10);
    });

    it('adds zero to a number', () => {
      expect(add(7, 0)).toBe(7);
    });
  });

  describe('subtract', () => {
    it('subtracts two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    it('subtracts a larger number from a smaller one', () => {
      expect(subtract(3, 8)).toBe(-5);
    });

    it('subtracts zero from a number', () => {
      expect(subtract(9, 0)).toBe(9);
    });
  });

  describe('multiply', () => {
    it('multiplies two positive numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    it('multiplies by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    it('multiplies two negative numbers', () => {
      expect(multiply(-2, -3)).toBe(6);
    });

    it('multiplies a positive and a negative number', () => {
      expect(multiply(4, -3)).toBe(-12);
    });
  });

  describe('divide', () => {
    it('divides two positive numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('divides resulting in a decimal', () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    it('divides a negative number', () => {
      expect(divide(-9, 3)).toBe(-3);
    });

    it('throws an error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
    });
  });
});
