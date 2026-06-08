const { add, sub, mul, div, modulo, power, squareRoot } = require('../calculator');

describe('calculator', () => {
  test('adds 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtracts 10 - 4 = 6', () => {
    expect(sub(10, 4)).toBe(6);
  });

  test('multiplies 45 * 2 = 90', () => {
    expect(mul(45, 2)).toBe(90);
  });

  test('divides 20 / 5 = 4', () => {
    expect(div(20, 5)).toBe(4);
  });

  test('handles decimals', () => {
    expect(add(2.5, 1.2)).toBeCloseTo(3.7);
  });

  test('division by zero throws', () => {
    expect(() => div(1, 0)).toThrow(/Division by zero/);
  });

  // Extended operations based on calc-extended-operations.png
  test('modulo 5 % 2 = 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('power 2 ^ 3 = 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('square root of 16 = 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('square root of negative number throws', () => {
    expect(() => squareRoot(-4)).toThrow(/Square root of negative number/);
  });

  test('modulo by zero throws', () => {
    expect(() => modulo(1, 0)).toThrow(/Modulo by zero/);
  });
});
