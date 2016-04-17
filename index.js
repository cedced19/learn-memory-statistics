var percent = require('./lib/percent');
var parse = require('./lib/parse');
var language = require('./lib/language');

module.exports = function (array) {
    var languages = [];
    var createdDate = {
      years: [],
      months: [],
      hours: []
    };
    var updatedDate = {
      years: [],
      months: [],
      hours: []
    };
    array.forEach(function (item) {
      var createdAt = new Date(item.createdAt);
      var updatedAt = new Date(item.updatedAt)

      languages.push(language(item.content));
      createdDate.years.push(createdAt.getFullYear());
      updatedDate.years.push(updatedAt.getFullYear());
      createdDate.hours.push(createdAt.getHours());
      updatedDate.hours.push(updatedAt.getHours());
      createdDate.months.push(createdAt.getMonth() + 1);
      updatedDate.months.push(updatedAt.getMonth() + 1);
    });
    return {
      languages: percent(languages),
      createdDate: {
        years: percent(createdDate.years),
        months: percent(createdDate.months),
        hours: percent(createdDate.hours)
      },
      updatedDate: {
        years: percent(updatedDate.years),
        months: percent(updatedDate.months),
        hours: percent(updatedDate.hours)
      }
    };
}
