import NumbersValidator from '../../app/numbers_validator.js';
import { expect } from 'chai';
import { describe, beforeEach, afterEach, it } from 'mocha';


describe('getEvenNumbersFromArray', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator;
  });

  afterEach(() => {
    validator = null;
  });

  it('should throw an error when type is not an array', () => {
    expect(() => {
      validator.getEvenNumbersFromArray(true);
    }).to.throw('[true] is not an array of "Numbers"');
  });

  it('should return an array of even numbers', () => {
    const arrayOfNumbers = [6, 15, 22, 1, 18];
    const evenNumbersFromArray = validator.getEvenNumbersFromArray(arrayOfNumbers);
    expect(evenNumbersFromArray).to.be.eql([6, 22, 18]);
  });

  it('should throw error if array is not full of numbers', () => {
    const arrayOfValues = [6, 15, 22, '1'];
    expect(() => {
      validator.getEvenNumbersFromArray(arrayOfValues);
    }).to.throw('[6,15,22,1] is not an array of "Numbers"');
  });

  it('should return null if array does not have even numbers', () => {
    const arrayOfOddNumbers = [5, 1, 3, 71];
    const numbersFromArray = validator.getEvenNumbersFromArray(arrayOfOddNumbers);
    expect(numbersFromArray).to.be.eql([]);
  });

  it('should return an array of negative even numbers', () => {
    const arrayOfNegativeNumbers = [5, 1, -32, -71];
    const numbersFromArray = validator.getEvenNumbersFromArray(arrayOfNegativeNumbers);
    expect(numbersFromArray).to.be.eql([-32]);
  });

});
