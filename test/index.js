var statistics = require('../');
var request = require('request');
var expect = require('chai').expect;


describe('Test receving statisctics from a list of lessons', function () {
  var data;
  before(function (done) {
    request('https://cedced19.github.io/learn-memory-static/data.json', function (error, response, body) {
        data = JSON.parse(body);
        done();
    });
  });

  it('should give statisctics for a list of lessons', function () {
    var result = statistics(data);
    expect(result).to.be.an('object');
    expect(result.languages).to.be.an('object');
    expect(result.subjects).to.be.an('object');
    expect(result.createdDate).to.be.an('object');
    expect(result.createdDate.years).to.be.an('object');
    expect(result.createdDate.months).to.be.an('object');
    expect(result.createdDate.hours).to.be.an('object');
    expect(result.createdDate.days).to.be.an('object');
    expect(result.updatedDate).to.be.an('object');
    expect(result.updatedDate.years).to.be.an('object');
    expect(result.updatedDate.months).to.be.an('object');
    expect(result.updatedDate.hours).to.be.an('object');
    expect(result.updatedDate.days).to.be.an('object');
    expect(result.years).to.be.an('object');
    //console.log(result);
  });
});
