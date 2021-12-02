/* eslint-disable max-lines */
// 1️⃣ should allow to specify the maximum number of attempts (defaults to 10)
// export class Hangman {
//   public secretWord = 'secret';
//   public maximumAttempts = 10;
//   public generateWord(): string {
//     return this.secretWord;
//   }
//   public getClue(currentClue = '', guessingLetter = '') {
//     const secretWordLength = this.generateWord().length;
//     if (currentClue === '') {
//       return '_'.repeat(secretWordLength);
//     }
//     let newClue = '';
//     for (let i = 0; i < secretWordLength; i++) {
//       if (this.secretWord[i] === guessingLetter) {
//         newClue += guessingLetter;
//       } else {
//         newClue += currentClue[i];
//       }
//     }
//     return newClue;
//   }
// }

// 2️⃣ the game should count the number of attempts
// export class Hangman {
//   public secretWord = 'secret';
//   public maximumAttempts = 10;
//   public attemptsCount = 0;
//   public generateWord(): string {
//     return this.secretWord;
//   }
//   public getClue(currentClue = '', guessingLetter = '') {
//     const secretWordLength = this.generateWord().length;
//     if (currentClue === '') {
//       return '_'.repeat(secretWordLength);
//     }
//     this.attemptsCount++;
//     let newClue = '';
//     for (let i = 0; i < secretWordLength; i++) {
//       if (this.secretWord[i] === guessingLetter) {
//         newClue += guessingLetter;
//       } else {
//         newClue += currentClue[i];
//       }
//     }
//     return newClue;
//   }
// }

// 3️⃣ should not allow more attempts than the maximum
// export class Hangman {
//   public secretWord = 'secret';
//   public maximumAttempts = 10;
//   public attemptsCount = 0;
//   public generateWord(): string {
//     return this.secretWord;
//   }
//   public getClue(currentClue = '', guessingLetter = '') {
//     const secretWordLength = this.generateWord().length;
//     if (currentClue === '') {
//       return '_'.repeat(secretWordLength);
//     }
//     this.attemptsCount++;
//     if (this.attemptsCount > this.maximumAttempts) {
//       throw new Error('You have run out of attempts to guess');
//     }
//     let newClue = '';
//     for (let i = 0; i < secretWordLength; i++) {
//       if (this.secretWord[i] === guessingLetter) {
//         newClue += guessingLetter;
//       } else {
//         newClue += currentClue[i];
//       }
//     }
//     return newClue;
//   }
// }

// 4️⃣ should not allow more attempts when all letters were guessed
// export class Hangman {
//   public secretWord = 'secret';
//   public maximumAttempts = 10;
//   public attemptsCount = 0;
//   public generateWord(): string {
//     return this.secretWord;
//   }
//   public getClue(currentClue = '', guessingLetter = '') {
//     const secretWordLength = this.generateWord().length;
//     if (currentClue === '') {
//       return '_'.repeat(secretWordLength);
//     }
//     if (currentClue === this.secretWord) {
//       throw new Error('You already guessed the word');
//     }
//     this.attemptsCount++;
//     if (this.attemptsCount > this.maximumAttempts) {
//       throw new Error('You have run out of attempts to guess');
//     }
//     let newClue = '';
//     for (let i = 0; i < secretWordLength; i++) {
//       if (this.secretWord[i] === guessingLetter) {
//         newClue += guessingLetter;
//       } else {
//         newClue += currentClue[i];
//       }
//     }
//     return newClue;
//   }
// }

// 5️⃣ the game should not generate the same secret word two consecutive times
// export class Hangman {
//   public secretWord = '';
//   public maximumAttempts = 10;
//   public attemptsCount = 0;
//   private lastSecretWord = '';
//   private words = ['secret', 'unknown', 'anything'];
//   public generateWord(): string {
//     while (this.secretWord === this.lastSecretWord) {
//       const randomIndex = Math.floor(Math.random() * this.words.length);
//       this.secretWord = this.words[randomIndex];
//     }
//     this.lastSecretWord = this.secretWord;
//     return this.secretWord;
//   }
//   public getClue(currentClue = '', guessingLetter = '') {
//     const secretWordLength = this.secretWord.length;
//     if (currentClue === '') {
//       return '_'.repeat(secretWordLength);
//     }
//     if (currentClue === this.secretWord) {
//       throw new Error('You already guessed the word');
//     }
//     this.attemptsCount++;
//     if (this.attemptsCount > this.maximumAttempts) {
//       throw new Error('You have run out of attempts to guess');
//     }
//     let newClue = '';
//     for (let i = 0; i < secretWordLength; i++) {
//       if (this.secretWord[i] === guessingLetter) {
//         newClue += guessingLetter;
//       } else {
//         newClue += currentClue[i];
//       }
//     }
//     return newClue;
//   }
// }

// 6️⃣ the game should reset the number of guessing attempts when generating a new word
export class Hangman {
  public secretWord = '';
  public maximumAttempts = 10;
  public attemptsCount = 0;
  private lastSecretWord = '';
  private words = ['secret', 'unknown', 'anything'];
  public generateWord(): string {
    while (this.secretWord === this.lastSecretWord) {
      const randomIndex = Math.floor(Math.random() * this.words.length);
      this.secretWord = this.words[randomIndex];
    }
    this.lastSecretWord = this.secretWord;
    this.attemptsCount = 0;
    return this.secretWord;
  }
  public getClue(currentClue = '', guessingLetter = '') {
    const secretWordLength = this.secretWord.length;
    if (currentClue === '') {
      return '_'.repeat(secretWordLength);
    }
    if (currentClue === this.secretWord) {
      throw new Error('You already guessed the word');
    }
    this.attemptsCount++;
    if (this.attemptsCount > this.maximumAttempts) {
      throw new Error('You have run out of attempts to guess');
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
