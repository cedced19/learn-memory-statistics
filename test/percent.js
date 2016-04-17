var assert = require('assert');

var percent = require('../lib/percent');

describe('Test percent function', function () {

  it('should give frequency in percent', function () {
    var output = percent(['blue', 'red', 'red', 'blue', 'blue']);
    assert.equal(output.blue, 60, 'should give number');
    assert.equal(output.red, 40, 'should give number');
    assert.equal(output.red + output.blue, 100, 'should give be aqual to 100');
  });

});
