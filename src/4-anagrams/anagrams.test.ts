// Student Task: a function that checks if two words are anagrams
// They should have the same case insensitive letters with equal number of occurrences
// Example: State <-> taste

// https://www.escueladeletras.com/literatura/anagrama/

import { areAnagrams } from './anagrams';

describe('anagram checker', () => {
  it('1️⃣ should return true with same words', () => {
    expect(areAnagrams('el', 'el')).toBe(true);
  });
  it('2️⃣ should be case insensitive', () => {
    expect(areAnagrams('El', 'eL')).toBe(true);
  });
  it('3️⃣ should be false for distinct length words', () => {
    expect(areAnagrams('a', 'al')).toBe(false);
  });
  it('4️⃣ should be false for distinct number of different letters', () => {
    expect(areAnagrams('aa', 'ab')).toBe(false);
  });
  it('5️⃣ should be true for having same number of different letters', () => {
    expect(areAnagrams('al', 'la')).toBe(true);
  });
  it('6️⃣ should be false for having any non common letters', () => {
    expect(areAnagrams('al', 'lo')).toBe(false);
  });
  it('7️⃣ should be false for different count of common letters', () => {
    expect(areAnagrams('ala', 'all')).toBe(false);
  });
  it('8️⃣ should resolve simple truthy cases', () => {
    expect(areAnagrams('more', 'Rome')).toBe(true);
  });
  it('8️⃣ should resolve simple falsy cases', () => {
    expect(areAnagrams('more', 'moor')).toBe(false);
  });
});
