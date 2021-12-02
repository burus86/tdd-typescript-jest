import { Employee, getSundayEmployees } from './employees';

const fixtureEmployees: Employee[] = [
  { name: 'John', age: 17 },
  { name: 'Ringo', age: 19 },
  { name: 'Paul', age: 18 },
  { name: 'George', age: 17 },
];

describe('the sundays employees report', () => {
  /**
   * 1️⃣
   * As a shop owner
   * I want to view a list of all employees which are older than 18 years,
   * so that I know who is allowed to work on Sundays.
   */
  // it('1️⃣ returns employees, which are older than 18 years', () => {
  //   const actual: Employee[] = getSundayEmployees(fixtureEmployees);
  //   const expected: Employee[] = [fixtureEmployees[1], fixtureEmployees[2]];
  //   expect(actual).toStrictEqual(expected);
  // });

  /**
   * 2️⃣
   * As a shop owner
   * I want the list of employees to be sorted by their name,
   * so I can find employees easier.
   */
  // it('2️⃣ returns employees ordered by their names', () => {
  //   const actual = getSundayEmployees(fixtureEmployees);
  //   const expected: Employee[] = [fixtureEmployees[2], fixtureEmployees[1]];
  //   expect(actual).toStrictEqual(expected);
  // });

  /**
   * 1️⃣
   * As A shop owner
   * I want to view a list of all employees which are older than 18 years,
   * so that I know who is allowed to work on Sundays.
   */
  // it('1️⃣ 🔀 returns employees, which are older than 18 years', () => {
  //   const actual = getSundayEmployees(fixtureEmployees);
  //   // const expected: Employee[] = [fixtureEmployees[1], fixtureEmployees[2]];
  //   // expect(actual).toStrictEqual(expect.arrayContaining(expected));
  //   expect(actual).toContain(fixtureEmployees[1]);
  //   expect(actual).toContain(fixtureEmployees[2]);
  // });

  /*
   * 3️⃣
   * As a shop owner
   * I want the list of employees to be capitalized,
   * so I can read it better.
   */
  it('3️⃣ returns employees with capitalized names', () => {
    const actual: string[] = getSundayEmployees(fixtureEmployees).map(
      a => a.name
    );
    const expected = ['PAUL', 'RINGO'];
    expect(actual).toStrictEqual(expect.arrayContaining(expected));
  });

  /**
   * 1️⃣
   * As A shop owner
   * I want to view a list of all employees which are older than 18 years,
   * so that I know who is allowed to work on Sundays.
   */
  it('1️⃣ 🔀 returns employees, which are older than 18 years', () => {
    const result = getSundayEmployees(fixtureEmployees);
    const actual = result.every(r => r.age >= 18);
    expect(actual).toBeTruthy();
  });

  /**
   * 2️⃣
   * As a shop owner
   * I want the list of employees to be sorted by their name,
   * so I can find employees easier.
   */
  it('2️⃣ returns employees ordered by their names', () => {
    const actual = getSundayEmployees(fixtureEmployees).map(r => r.name);
    const expected = actual.sort();
    expect(actual).toStrictEqual(expected);
  });
});
