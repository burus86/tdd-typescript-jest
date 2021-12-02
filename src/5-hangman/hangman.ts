// 1️⃣ should generate a word of random length between 5 an 10
// export class Hangman {
//   public generateWord(): string {
//     return 'secret';
//   }
// }

// 2️⃣ should give a clue of dashes with the length of the secret word
// export class Hangman {
//   public generateWord(): string {
//     return 'secret';
//   }
//   public getClue() {
//     const secretWordLength = this.generateWord().length;
//     return '_'.repeat(secretWordLength);
//   }
// }

// 3️⃣ should give a new clue replacing dashes with guessed letters
// 4️⃣ should give a same clue if guessed letters is no present
// 5️⃣ should give a new clue replacing multiple dashes with guessed letters multiple times
export class Hangman {
  public secretWord = 'secret';
  public generateWord(): string {
    return this.secretWord;
  }
  public getClue(currentClue = '', guessingLetter = '') {
    const secretWordLength = this.generateWord().length;
    if (currentClue === '') {
      return '_'.repeat(secretWordLength);
    }
    let newClue = '';
    for (let i = 0; i < secretWordLength; i++) {
      if (this.secretWord[i] === guessingLetter) {
        newClue += guessingLetter;
      } else {
        newClue += currentClue[i];
      }
    }
    return newClue;
  }
}
