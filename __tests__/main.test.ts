const sum = (a: number, b: number) => a + b;

test('sum(1, 2) = 3', () => {
  expect(sum(1, 2)).toBe(3);
});