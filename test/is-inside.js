var assert = require('assert');

var isInside = require('../lib/is-inside');

describe('Test is-inside function', function () {

  it('should detect that the value exists in the array', function () {
    var output = isInside('a', {a: 1, b: 3});
    assert.equal(output, true, 'should be true');
  });

  it('should detect that the value does not exist in the array', function () {
    var output = isInside('c', {a: 1, b: 3});
    assert.equal(output, false, 'should be false');
  });

});
