var assert = require('assert');

var parse = require('../lib/parse');

describe('Test parse function', function () {

  it('should parse the content of the object', function () {
    var output = parse({
      content: '<h1>Title: &quotAn awesome title&quot</h1>'
    });
    assert.equal(output.content, ' Title: "An awesome title" ', 'should have parsed the content');
  });

  it('should parse the content of all objects', function () {
    var output = parse([
      {
        content: '<h1>Title: &quotAn awesome title&quot</h1>'
      },
      {
        content: '<h1>Title: &#39;An awesome title&#39;</h1>'
      }
    ]);
    assert.equal(output[0].content, ' Title: "An awesome title" ', 'should have parsed the content');
    assert.equal(output[1].content, ' Title: \'An awesome title\' ', 'should have parsed the content');
  });
});
