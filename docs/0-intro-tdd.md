# 0 - Intro TDD

## TDD is testing

### Tools: Jest

- Test runner
- Assertion library
- Testing framework

### Syntax

```ts
describe('the subject under test', () => {
  let sut;
  beforeEach(() => {
    // Arrange
    sut = undefined;
  });
  it('should do something', () => {
    // Act
    const actual = undefined;
    // Assert
    const expected = undefined;
    expect(actual).toStrictEqual(expected);
  });
});
```

## TDD is a coding discipline

### Test before

- If you write your tests before you are forced to think and have a better understanding.
- If you write your tests before you will have a functional documentation for free.
- If you write your tests before your objects wil have a more convenient API.
- If you write your tests before your code will be easier to maintain.
- If you write your tests before... you always write tests.

### Red Green Refactor

- ❌ Red: Write a test and see it failing
- ✔️ Green: Write the minimum code that makes the test pass
- 🔵 Refactor: Write a cleaner or more efficient implementation

> 🚧 Some people considere a yellow step when test does not compile yet

### Unit, integration, e2e

- Can be used for any kind of tests... but
- In my opinion TDD is better suited to unit testing complex clases or functions

## TDD timings

- Initially it takes longer to get things done
- Reduces debugging times in the medium term
- Start small and take baby steps
- Test should be really fast
