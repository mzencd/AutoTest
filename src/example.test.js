import { expect, test } from 'vitest'
import { sum1, sum2, sum3, sum4, sum5 } from './example.js'
import { sum6, sum7, sum8, sum9, sum10 } from './example2.js'

test('adds 1 + 2 to equal 3', () => {
    expect(sum1(1, 2)).toBe(3);
})

test('adds 2 + 3 to equal 5', () => {
    expect(sum2(2, 3)).toBe(5);
})

test('adds 3 + 4 to equal 7', () => {
    expect(sum3(3, 4)).toBe(7);
})

test('adds 4 + 5 to equal 9', () => {
    expect(sum4(4, 5)).toBe(9);
})

test('adds 5 + 6 to equal 11', () => {
    expect(sum5(5, 6)).toBe(11);
})

test('adds 6 + 7 to equal 13', () => {
    expect(sum6(6, 7)).toBe(13);
})

test('adds 7 + 8 to equal 15', () => {
    expect(sum7(7, 8)).toBe(15);
})

test('adds 8 + 9 to equal 17', () => {
    expect(sum8(8, 9)).toBe(17);
})

test('adds 9 + 10 to equal 19', () => {
    expect(sum9(9, 10)).toBe(19);
})

test('adds 10 + 11 to equal 21', () => {
    expect(sum10(10, 11)).toBe(21);
})