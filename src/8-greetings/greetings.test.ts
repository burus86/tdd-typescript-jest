import { greet } from './greetings';

describe('the greetings method', () => {
  // 1️⃣ Write a method greet(name) that interpolates name in a simple greeting.
  // For example, when name is "Bob", the method should return a string "Hello, Bob.".
  it('should interpolate a name', () => {
    const actual = greet('Bob');
    const expected = 'Hello, Bob.';
    expect(actual).toStrictEqual(expected);
  });
  // 2️⃣ Handle undefined by introducing default value.
  // For example, when no name is passed, then the method should return the string "Hello, my friend."
  it('should handle nulls', () => {
    const actual = greet();
    const expected = 'Hello, my friend.';
    expect(actual).toStrictEqual(expected);
  });
  // 3️⃣ Handle shouting. When name is all uppercase, then the method should scream also.
  // For example, when name is "JERRY" then the method should return the string "HELLO JERRY!"
  it('should handle shouting', () => {
    const actual = greet('JERRY');
    const expected = 'HELLO JERRY!';
    expect(actual).toStrictEqual(expected);
  });
  // 4️⃣ Handle two names of input. When name is an array of two names then both names should be printed.
  // For example, when name is ["Jill", "Jane"] then the method should return the string "Hello, Jill and Jane."
  it('should handle two names', () => {
    const actual = greet(['Jill', 'Jane']);
    const expected = 'Hello, Jill and Jane.';
    expect(actual).toStrictEqual(expected);
  });
  // 5️⃣ Handle an arbitrary number of names as input. When name represents more than two names, separate them with commas and close with an Oxford comma and "and"
  // For example, when name is ["Amy", "Brian", "Charlotte"] then the method should return the string "Hello, Amy, Brian, and Charlotte."
  it('should handle an arbitrary number of names as input.', () => {
    const actual = greet(['Amy', 'Brian', 'Charlotte']);
    const expected = 'Hello, Amy, Brian, and Charlotte.';
    expect(actual).toStrictEqual(expected);
  });
  // 6️⃣ Allow mixing of normal and shouted names by separating the response into two greetings.
  // For example, when name is ["Amy", "BRIAN", "Charlotte"], then the method should return the string "Hello, Amy and Charlotte. AND HELLO BRIAN!"
  it('should handle mixed names', () => {
    const actual = greet(['Amy', 'BRIAN', 'Charlotte']);
    const expected = 'Hello, Amy and Charlotte. AND HELLO BRIAN!';
    expect(actual).toStrictEqual(expected);
  });
  // 7️⃣ handle really mixed names
  // For example, when name is ["Amy", "BRIAN", "Charlotte"], then the method should return the string "Hello, Amy and Charlotte. AND HELLO BRIAN!"
  it('should handle really mixed names', () => {
    const actual = greet([
      'Amy',
      'BRIAN',
      'Charlotte',
      'DIANE',
      'Eugene',
      'FRED',
    ]);
    const expected =
      'Hello, Amy, Charlotte, and Eugene. AND HELLO BRIAN, DIANE, AND FRED!';
    expect(actual).toStrictEqual(expected);
  });
  it('should be battle tested', () => {
    const actual = greet(['Amy', 'BRIAN']);
    const expected = 'Hello, Amy. AND HELLO BRIAN!';
    expect(actual).toStrictEqual(expected);
  });
  it('should be more battle tested', () => {
    const actual = greet(['AMY', 'BRIAN']);
    const expected = 'HELLO AMY AND BRIAN!';
    expect(actual).toStrictEqual(expected);
  });
});

// 8️⃣ Refactor to comply with eslint rules
