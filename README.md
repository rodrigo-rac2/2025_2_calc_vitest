# 2025_2_calc_vitest

A demo calculator project with [Vitest](https://vitest.dev/) unit tests, used to demonstrate Test-Driven Development (TDD).

## Features

- Basic arithmetic operations: **add**, **subtract**, **multiply**, **divide**
- 15 unit tests covering normal cases and edge cases (e.g. division by zero)
- Fast test runner powered by Vitest

## Getting Started

```bash
npm install
npm test
```

To run tests in watch mode:

```bash
npm run test:watch
```

## Project Structure

```
src/
  calculator.js       # Calculator module (add, subtract, multiply, divide)
  calculator.test.js  # Vitest unit tests
```
