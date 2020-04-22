import capitalize  from './functions';

test('capitalize', () => {
  expect(typeof capitalize).toEqual('function');
})

test('capitalize', () => {
  expect(capitalize("hello")).toEqual('Hello');
})