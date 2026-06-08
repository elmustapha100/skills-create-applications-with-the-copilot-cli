/**
 * Simple calculator module supporting basic arithmetic operations.
 * Supported operations:
 * - Addition
 * - Subtraction
 * - Multiplication
 * - Division
 *
 * The functions accept numeric operands (integers or decimals) and return the
 * numeric result. Division by zero throws an Error.
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

module.exports = { add, sub, mul, div };
