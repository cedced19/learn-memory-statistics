var assert = require('assert');
var expect = require('chai').expect;

var sortByYear = require('../lib/sort-by-year');

describe('Test sort-by-year function', function () {

  it('should detect that the value exists in the array', function () {
    var output = sortByYear([{createdAt: '2014-11-16T12:39:56.617Z', id: 1}, {createdAt: '2016-04-14T09:08:17.242Z', id: 2}]);
    expect(output[2014]).to.be.an('array');
    expect(output[2014][0]).to.be.an('object');
    assert.equal(output[2014][0].id, 1, 'should have the id');
    expect(output[2016]).to.be.an('array');
    expect(output[2016][0]).to.be.an('object');
    assert.equal(output[2016][0].id, 2, 'should have the id');
  });

});
