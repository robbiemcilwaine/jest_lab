const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 150;
    actual = sum(100, 50);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -5;
    actual = sum(-2, -3);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 8;
    actual = sum(8, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  test('can subtract two small positive numbers', () => {
    expected = 8;
    actual = subtract(12, 4);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    expected = 90;
    actual = subtract(120, 30);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = -2;
    actual = subtract(-5, -3);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = 8;
    actual = subtract(8, 0);
    expect(actual).toBe(expected);
  });
});

describe('multiply', () => {
  test('can multiply two small positive numbers', () => {
    expected = 4;
    actual = multiply(2, 2);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => { 
    expected = 400;
    actual = multiply(20, 20);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 4;
    actual = multiply(-2, -2);
    expect(actual).toBe(expected);
  });

  test('can multiply zero', () => {
    expected = 0;
    actual = multiply(8, 0);
    expect(actual).toBe(expected);
  });
});

describe('divide', () => {
  test('can divide two small positive numbers', () => {
    expected = 9;
    actual = divide(18, 2);
    expect(actual).toBe(expected);
  });

  test('can divide two large positive numbers', () => { 
    expected = 20;
    actual = divide(400, 20);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    expected = 1;
    actual = divide(-8, -8);
    expect(actual).toBe(expected);
  });

  test('can divide zero', () => {
    expected = Infinity;
    actual = divide(8, 0);
    expect(actual).toBe(expected);
  });
});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
