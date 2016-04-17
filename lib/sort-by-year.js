var isInside = require('./is-inside');

module.exports = function (array) {
  var list = {};

  array.forEach(function (item) {
    var year = new Date(item.createdAt).getFullYear();
    if (isInside(year, list)) {
      list[year].push(item);
    } else {
      list[year] = [];
      list[year].push(item);
    }
  });
  return list;
};
