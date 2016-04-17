var assert = require('assert');

var language = require('../lib/language');

describe('Test language function', function () {

  it('should detect which language I use', function () {
    var output = language('Je suis Cédric. Je vis en France et j\'ai 15 ans.');
    assert.equal(output, 'French', 'should be french');
  });

});
