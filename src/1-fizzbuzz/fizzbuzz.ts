export function fizzbuzz(aNumber: number): string {
  if (isMultipleOf(15, aNumber)) {
    return 'FizzBuzz';
  }
  if (isMultipleOf(5, aNumber)) {
    return 'Buzz';
  }
  if (isMultipleOf(3, aNumber)) {
    return 'Fizz';
  }
  return aNumber.toString();
}

const isMultipleOf = (multiple: number, aNumber: number): boolean =>
  aNumber % multiple === 0;

// const isMultipleOfThree = (aNumber: number): boolean => aNumber % 3 === 0;

// const isMultipleOfFive = (aNumber: number): boolean => aNumber % 5 === 0;
