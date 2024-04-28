
import { expect } from 'chai';
import { describe, beforeEach, afterEach, it } from 'mocha';
import NumbersValidator from '../../app/numbers_validator.js';


describe('isAllNumbers', function () {
  let validator;

  beforeEach(function () {
    validator = new NumbersValidator();
  });

  afterEach(function () {
    validator = null;
  });

  it('should return true if all values are numbers', function () {
    expect(validator.isAllNumbers([4, 15, 73])).to.be.equal(true);
  });

  it('should return false if one of the values is a string', function () {
    expect(validator.isAllNumbers([4, 15, '73'])).to.be.equal(false);
  });

  it('should return false if one of the values is an undefined', function () {
    expect(validator.isAllNumbers([4, 15, undefined])).to.be.equal(false);
  });

  it('should return false if one of the values is a boolean', function () {
    expect(validator.isAllNumbers([4, 15, true])).to.be.equal(false);
  });

  it('should throw an error when type is a string', () => {
    expect(() => {
      validator.isAllNumbers('73');
    }).to.throw('[73] is not an array');
  });

  it('should throw an error when type is a boolean', () => {
    expect(() => {
      validator.isAllNumbers(false);
    }).to.throw('[false] is not an array');
  });

  it('should throw an error when type is an object', () => {
    expect(() => {
      validator.isAllNumbers({ sity: "Lviv" });
    }).to.throw('[[object Object]] is not an array');
  });

  it('should throw an error when type is an undefined', () => {
    expect(() => {
      validator.isAllNumbers();
    }).to.throw('[undefined] is not an array');
  });

});
