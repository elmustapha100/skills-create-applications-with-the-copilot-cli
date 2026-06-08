const { add, sub, mul, div } = require('../calculator');

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
});
