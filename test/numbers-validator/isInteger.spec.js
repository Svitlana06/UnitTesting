
import { expect } from 'chai';
import { describe, beforeEach, afterEach, it } from 'mocha';
import NumbersValidator from '../../app/numbers_validator.js';


describe('isInteger', function () {
  let validator;

  beforeEach(function () {
    validator = new NumbersValidator();
  });

  afterEach(function () {
    validator = null;
  });

  it('should throw an error when type is not a number', () => {
    expect(() => {
      validator.isInteger();
    }).to.throw('[undefined] is not a number');
  });

  it('should return true if type is a number', function () {
    expect(validator.isInteger(39)).to.be.equal(true);
  });

});
