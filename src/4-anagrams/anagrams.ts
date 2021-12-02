import { getLetterCount } from '../3-letter-count/letter-count';

// export const areAnagrams = (first: string, second: string): boolean => {
//   // 2️⃣
//   const firstCleaned = first.toLowerCase();
//   const secondCleaned = second.toLowerCase();
//   // 1️⃣
//   if (firstCleaned === secondCleaned) return true;
//   // 3️⃣
//   if (firstCleaned.length !== secondCleaned.length) return false;

//   const firstLetterCount = getLetterCount(firstCleaned); // {a:1, l:1}
//   const secondLetterCount = getLetterCount(secondCleaned); // {l:1,a:1}
//   const firstDistinctLetters = Object.keys(firstLetterCount); // [a, l]
//   const secondDistinctLetters = Object.keys(secondLetterCount); // [l, a]

//   // 4️⃣
//   if (firstDistinctLetters.length != secondDistinctLetters.length) return false;
//   let areAnagrams = true;
//   firstDistinctLetters.forEach(letterOfFirst => {
//     // 6️⃣
//     if (!secondDistinctLetters.includes(letterOfFirst)) {
//       areAnagrams = false;
//     }
//     // 7️⃣
//     if (secondLetterCount[letterOfFirst] !== firstLetterCount[letterOfFirst]) {
//       areAnagrams = false;
//     }
//   });
//   // 5️⃣
//   return areAnagrams;
//   // return JSON.stringify(firstLetterCount) === JSON.stringify(secondLetterCount); //
// };

// 8️⃣ Refactoring
export const areAnagrams = (first: string, second: string): boolean => {
  const firstCleaned = first.toLowerCase(); //2️⃣
  const secondCleaned = second.toLowerCase(); //2️⃣
  if (firstCleaned === secondCleaned) {
    return true; // 1️⃣
  }
  if (firstCleaned.length !== secondCleaned.length) {
    return false; //3️⃣
  }
  const firstLetterCount = getLetterCount(firstCleaned);
  const secondLetterCount = getLetterCount(secondCleaned);
  const firstLetters = Object.keys(firstLetterCount);
  const secondLetters = Object.keys(secondLetterCount);
  if (firstLetters.length !== secondLetters.length) {
    return false; // 4️⃣
  }
  // 5️⃣ 6️⃣ 7️⃣
  return firstLetters.every(
    letterOfFirst =>
      firstLetterCount[letterOfFirst] === secondLetterCount[letterOfFirst]
  );
};
