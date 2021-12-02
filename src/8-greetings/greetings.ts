/* eslint-disable complexity */
/* eslint-disable max-depth */
export function greet(name: string | string[] = 'my friend') {
  const isArray = Array.isArray(name);
  if (isArray) {
    const names = name as string[];
    const uppercaseNames = names.filter(name => name.toUpperCase() === name);
    const normalNames = names.filter(name => name.toUpperCase() !== name);
    let normalGreeting = '';
    let uppercaseGreeting = '';
    if (normalNames.length > 0) {
      const isOnlyOne = normalNames.length === 1;
      const areOnlyTwoNames = normalNames.length === 2;
      if (isOnlyOne) {
        normalGreeting = `Hello, ${normalNames[0]}.`;
      } else if (areOnlyTwoNames) {
        normalGreeting = `Hello, ${normalNames.join(' and ')}.`;
      } else {
        const firstNames = normalNames.slice(0, normalNames.length - 1);
        const lastName = normalNames[normalNames.length - 1];
        const namesJoin = `${firstNames.join(', ')}, and ${lastName}`;
        normalGreeting = `Hello, ${namesJoin}.`;
      }
    }
    if (uppercaseNames.length > 0) {
      const isOnlyOne = uppercaseNames.length === 1;
      const areOnlyTwoNames = uppercaseNames.length === 2;
      if (isOnlyOne) {
        uppercaseGreeting = `HELLO ${uppercaseNames[0]}!`;
      } else if (areOnlyTwoNames) {
        uppercaseGreeting = `HELLO ${uppercaseNames.join(' AND ')}!`;
      } else {
        const firstNames = uppercaseNames.slice(0, uppercaseNames.length - 1);
        const lastName = uppercaseNames[uppercaseNames.length - 1];
        const namesJoin = `${firstNames.join(', ')}, AND ${lastName}`;
        uppercaseGreeting = `HELLO ${namesJoin}!`;
      }
    }
    if (normalGreeting && uppercaseGreeting) {
      return `${normalGreeting} AND ${uppercaseGreeting}`;
    } else {
      return normalGreeting + uppercaseGreeting;
    }
  } else {
    const isUppercase = name.toUpperCase() === name;
    if (isUppercase) {
      return `HELLO ${name}!`;
    } else {
      return `Hello, ${name}.`;
    }
  }
}
