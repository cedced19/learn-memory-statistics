var percent = require('./lib/percent');
var parse = require('./lib/parse');
var language = require('./lib/language');
var dayOfWeek = require('./lib/day-of-week');
var sortByYear = require('./lib/sort-by-year');

var analyze = function (array) {
  var languages = [];
  var subjects = [];
  var createdDate = {
    years: [],
    months: [],
    hours: [],
    days: []
  };
  var updatedDate = {
    years: [],
    months: [],
    hours: [],
    days: []
  };
  array.forEach(function (item) {
    var createdAt = new Date(item.createdAt);
    var updatedAt = new Date(item.updatedAt);

    subjects.push(item.substance);
    languages.push(language(item.content));
    createdDate.years.push(createdAt.getFullYear());
    updatedDate.years.push(updatedAt.getFullYear());
    createdDate.hours.push(createdAt.getHours() + 1);
    updatedDate.hours.push(updatedAt.getHours() + 1);
    createdDate.months.push(createdAt.getMonth() + 1);
    updatedDate.months.push(updatedAt.getMonth() + 1);
    createdDate.days.push(dayOfWeek(createdAt));
    updatedDate.days.push(dayOfWeek(updatedAt));
  });
  return {
    languages: percent(languages),
    subjects: percent(subjects),
    createdDate: {
      years: percent(createdDate.years),
      months: percent(createdDate.months),
      hours: percent(createdDate.hours),
      days: percent(createdDate.days)
    },
    updatedDate: {
      years: percent(updatedDate.years),
      months: percent(updatedDate.months),
      hours: percent(updatedDate.hours),
      days: percent(updatedDate.days)
    }
  };
};

module.exports = function (array) {
    array = parse(array);
    var result = analyze(array);
    result.years = {};
    var years = sortByYear(array);
    for (var i in years) {
        result.years[i] = analyze(years[i]);
    }
    return result;
};
