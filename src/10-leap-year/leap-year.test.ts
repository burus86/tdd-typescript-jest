import { Year } from './leap-year';

describe('a generic linked list', () => {
  it('isLeap returns always FALSE', () => {
    const actual = new Year(2021).isLeap();
    expect(actual).toBeFalsy();
  });

  it('isLeap returns TRUE for year 2020', () => {
    const actual = new Year(2020).isLeap();
    expect(actual).toBeTruthy();
  });

  it('isLeap returns TRUE for any year divisible by 4', () => {
    const actual = new Year(2024).isLeap();
    expect(actual).toBeTruthy();
  });

  it('isLeap returns FALSE for any year NOT divisible by 4', () => {
    const actual = new Year(2025).isLeap();
    expect(actual).toBeFalsy();
  });

  it('isLeap returns TRUE for any year divisible by 4 and 100', () => {
    expect(new Year(2000).isLeap()).toBeTruthy();
    expect(new Year(1600).isLeap()).toBeTruthy();
  });

  it('isLeap returns FALSE for any year NOT divisible by 4 or any century not divisible by 400', () => {
    expect(new Year(1700).isLeap()).toBeFalsy();
    expect(new Year(1800).isLeap()).toBeFalsy();
    expect(new Year(1900).isLeap()).toBeFalsy();
  });
});
