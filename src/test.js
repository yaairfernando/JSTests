import {
  capitalize, reverseString, calculator, analyze, caesarCipher,
} from './functions';

test('capitalize', () => {
  expect(typeof capitalize).toEqual('function');
});

test('capitalize', () => {
  expect(capitalize('hello')).toEqual('Hello');
});

test('reverseString', () => {
  expect(typeof reverseString).toEqual('function');
});

test('reverseString', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

test('calculator', () => {
  expect(typeof reverseString).toEqual('function');
});

test('calculator', () => {
  expect(calculator.add(1, 2, 3)).toEqual(6);
});

test('calculator', () => {
  expect(calculator.substract(3, 2)).toEqual(1);
});

test('calculator', () => {
  expect(calculator.multiply(3, 2)).toEqual(6);
  expect(calculator.multiply(100, 2, 2)).toEqual(400);
});

test('calculator', () => {
  expect(calculator.divide(10, 2)).toEqual(5);
  expect(calculator.divide(11, 2)).toEqual(5.5);
});

test('analize', () => {
  expect(typeof analyze).toEqual('function');
  const rst = analyze([1, 2, 3, 4, 5]);
  expect(rst.average).toEqual(3);
  expect(rst.min).toEqual(1);
  expect(rst.max).toEqual(5);
  expect(rst.length).toEqual(5);


  const rst2 = analyze([10, 20, 20, 50]);
  expect(rst2.average).toEqual(25);
  expect(rst2.min).toEqual(10);
  expect(rst2.max).toEqual(50);
  expect(rst2.length).toEqual(4);
});

test('caesarCipher', () => {
  expect(typeof caesarCipher).toEqual('function');
});

test('caesarCipher', () => {
  expect(caesarCipher('hello', 1)).toEqual('gdkkn');
  expect(caesarCipher('zebra', 1)).toEqual('ydaqz');
  expect(caesarCipher('zebra', 2)).toEqual('xczpy');
  expect(caesarCipher('zebra', 3)).toEqual('wbyox');
});