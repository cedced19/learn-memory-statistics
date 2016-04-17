var assert = require('assert');

var dayOfWeek = require('../lib/day-of-week');

describe('Test day-of-week function', function () {

  it('should detect which day it is', function () {
    var output = dayOfWeek(new Date('2014-11-16T12:39:56.617Z'));
    assert.equal(output, '7', 'should be a sunday');
  });

});
