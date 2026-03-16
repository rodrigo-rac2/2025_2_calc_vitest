import { expect, test } from 'vitest'
import { sum } from './sum.js'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('adds 10000 + -2 to equal 3', () => {
    expect(sum(10000, -2)).toBe(9998)
  })

test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0)
  })

test('adds until the INT limit in JS', () => {
    expect(sum(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1)
  })

test('adds until the INT limit negative in JS', () => {
    expect(sum(-Number.MAX_SAFE_INTEGER, -1)).toBe(-Number.MAX_SAFE_INTEGER - 1)
  })

// test('sums a list of numbers', () => {
//     expect(sumList([1, 2, 3, 4, 5])).toBe(15)
//   })

// test('sums a list of numbers - negative test', () => {
//     expect(sumList([1, 2, 3, 4, 5])).not.toBe(10)
//   })