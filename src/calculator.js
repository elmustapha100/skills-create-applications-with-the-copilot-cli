/**
 * Simple calculator module supporting basic arithmetic operations.
 * Supported operations:
 * - Addition
 * - Subtraction
 * - Multiplication
 * - Division
 * - Modulo (remainder)
 * - Exponentiation (power)
 * - Square root
 *
 * The functions accept numeric operands (integers or decimals) and return the
 * numeric result. Division or modulo by zero throws an Error. Square root of
 * negative numbers throws an Error.
 */

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of negative number');
  }
  return Math.sqrt(n);
}

module.exports = { add, sub, mul, div, modulo, power, squareRoot };
