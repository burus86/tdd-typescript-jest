export type Employee = { name: string; age: number };

export function getSundayEmployees(fixtureEmployees: Employee[]): Employee[] {
  return fixtureEmployees
    .filter(e => e.age >= 18)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(e => ({ ...e, name: e.name.toUpperCase() }));
}
