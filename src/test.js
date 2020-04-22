import {capitalize, reverseString, calculator}  from './functions';

test('capitalize', () => {
  expect(typeof capitalize).toEqual('function');
})

test('capitalize', () => {
  expect(capitalize("hello")).toEqual('Hello');
})

test('reverseString', () => {
  expect(typeof reverseString).toEqual('function');
})

test('reverseString', () => {
  expect(reverseString("hello")).toEqual('olleh');
})

test('calculator', () => {
  expect(typeof reverseString).toEqual('function');
})

test('calculator', () => {
  expect(calculator.add(1,2,3)).toEqual(6);
})

test('calculator', () => {
  expect(calculator.substract(3,2)).toEqual(1);
})