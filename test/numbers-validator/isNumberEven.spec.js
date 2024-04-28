
import { expect } from 'chai';
import { describe, beforeEach, afterEach, it } from 'mocha';
import NumbersValidator from '../../app/numbers_validator.js';


describe('isNumberEven', function () {
  let validator;

  beforeEach(function () {
    validator = new NumbersValidator();
  });

  afterEach(function () {
    validator = null;
  });

  it('should return false if number is not even', function () {
    expect(validator.isNumberEven(5)).to.be.equal(false);
  });

  it('should return true if number is even', function () {
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });

  it('should throw an error when type is not a number', () => {
    expect(() => {
      validator.isNumberEven({ age: 25 });
    }).to.throw('[[object Object]] is not of type "Number" it is of type "object"');
  });

});
