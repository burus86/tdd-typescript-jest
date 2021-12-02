// Discovering algorithm from examples

/*
 * Fibonacci Sequence
f_{0}=0
f_{1}=1
f_{2}=1
f_{3}=2
f_{4}=3
f_{5}=5
f_{6}=8
f_{7}=13
f_{8}=21
f_{9}=34

 * Rule thats emerges
f_{n}=f_{n-1}+f_{n-2}
*/

import { fibonacci } from './fibonacci';

describe('the fibonacci function', () => {
  it('should return cero for cero', () => {
    expect(fibonacci(0)).toBe(0);
  });
  it('should return one for one', () => {
    expect(fibonacci(1)).toBe(1);
  });
  it('should return one for two', () => {
    expect(fibonacci(2)).toBe(1);
  });
  it('should return two for three', () => {
    expect(fibonacci(3)).toBe(2);
  });
  it('should return three for four', () => {
    expect(fibonacci(4)).toBe(3);
  });
  it('should return five for five', () => {
    expect(fibonacci(5)).toBe(5);
  });
  it('should return eight for six', () => {
    expect(fibonacci(6)).toBe(8);
  });
  it('should return the sum of two previous for more than 2', () => {
    expect(fibonacci(6)).toBe(8);
  });
});
