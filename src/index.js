#!/usr/bin/env node
/**
 * CLI for the calculator in src/calculator.js
 * Supports these operations: add, sub, mul, div
 * Examples:
 *   node src/index.js add 2 3    # 5
 *   node src/index.js sub 5 2    # 3
 *   node src/index.js mul 3 4    # 12
 *   node src/index.js div 10 2   # 5
 */

const path = require('path');
const { add, sub, mul, div } = require('./calculator');

function printHelp() {
  console.log('Usage: node src/index.js <command> <num1> <num2>');
  console.log('Commands: add | sub | mul | div');
  console.log('\nExamples:');
  console.log('  node src/index.js add 2 3');
  console.log('  node src/index.js div 10 2');
}

const [, , cmd, arg1, arg2] = process.argv;

if (!cmd || cmd === '--help' || cmd === '-h') {
  printHelp();
  process.exit(0);
}

if (typeof arg1 === 'undefined' || typeof arg2 === 'undefined') {
  console.error('Error: two numeric operands are required.');
  printHelp();
  process.exit(1);
}

const a = Number(arg1);
const b = Number(arg2);

if (!Number.isFinite(a) || !Number.isFinite(b)) {
  console.error('Error: operands must be valid numbers.');
  process.exit(1);
}

try {
  let result;
  switch (cmd.toLowerCase()) {
    case 'add':
    case '+':
      result = add(a, b);
      break;
    case 'sub':
    case '-':
      result = sub(a, b);
      break;
    case 'mul':
    case '*':
    case 'x':
      result = mul(a, b);
      break;
    case 'div':
    case '/':
      result = div(a, b);
      break;
    default:
      console.error(`Unknown command: ${cmd}`);
      printHelp();
      process.exit(1);
  }

  // Print numeric result to stdout
  console.log(result);
  process.exit(0);
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
