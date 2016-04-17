var statistics = require('../');
var request = require('request');


describe('Test receving statisctics from a list of lessons', function () {
  var data;
  before(function (done) {
    request('https://cedced19.github.io/learn-memory-static/data.json', function (error, response, body) {
        data = JSON.parse(body);
        done();
    });
  });

  it('should give statisctics for a list of lessons', function () {
    //console.log(require('../')(data));
  });
});
