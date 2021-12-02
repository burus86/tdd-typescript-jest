// Student Task: improve the hangman game

/*
 * the game ends when the user runs out of attempts (defaults to 10) or guesses the word
 * the game should not generate the same secret word two consecutive times
 * the game should reset the number of guessing attempts when generating a new word
 */

import { Hangman } from './hangman-plus';

describe('the Hangman game engine plus', () => {
  let sutHangman: Hangman;
  beforeEach(() => {
    sutHangman = new Hangman();
  });
  it('1️⃣ should allow to specify the maximum number of attempts (defaults to 10)', () => {
    const expectedDefault = 10;
    expect(sutHangman.maximumAttempts).toStrictEqual(expectedDefault);
    const input = 5;
    sutHangman.maximumAttempts = input;
    expect(sutHangman.maximumAttempts).toStrictEqual(input);
  });
  it('2️⃣ the game should count the number of guessing attempts', () => {
    sutHangman.secretWord = 'vitae';
    const inputClue = sutHangman.getClue();
    const inputLetter = 'e';
    sutHangman.getClue(inputClue, inputLetter);
    const actual = sutHangman.attemptsCount;
    const expected = 1;
    expect(actual).toStrictEqual(expected);
  });
  it('3️⃣ should not allow more attempts than the maximum', () => {
    sutHangman.secretWord = 'vitae';
    sutHangman.maximumAttempts = 1;
    const inputClue = sutHangman.getClue();
    const inputLetter = 'e';
    sutHangman.getClue(inputClue, inputLetter);

    // expect(function () {
    //   sutHangman.getClue();
    // }).toThrow('');

    const action = () => sutHangman.getClue(inputClue, inputLetter);
    expect(action).toThrow('You have run out of attempts to guess');
  });
  it('4️⃣ should not allow more attempts when all letters were guessed', () => {
    sutHangman.secretWord = 'vitae';
    let inputClue = sutHangman.getClue();
    inputClue = sutHangman.getClue(inputClue, 'v');
    inputClue = sutHangman.getClue(inputClue, 'i');
    inputClue = sutHangman.getClue(inputClue, 't');
    inputClue = sutHangman.getClue(inputClue, 'a');
    inputClue = sutHangman.getClue(inputClue, 'e');
    const action = () => sutHangman.getClue(inputClue, 'v');
    expect(action).toThrow('You already guessed the word');
  });
  it('5️⃣ the game should not generate the same secret word two consecutive times', () => {
    const expected = sutHangman.generateWord();
    const actual = sutHangman.generateWord();
    expect(actual).not.toStrictEqual(expected);
  });
  it('6️⃣ the game should reset the number of guessing attempts when generating a new word', () => {
    sutHangman.generateWord();
    let inputClue = sutHangman.getClue();
    inputClue = sutHangman.getClue(inputClue, 'v');
    sutHangman.getClue(inputClue, 'i');
    sutHangman.generateWord();
    const actual = sutHangman.attemptsCount;
    const expected = 0;
    expect(actual).toBe(expected);
  });
});

// Improvements
// Extract secret generation responsibility out of the game.
