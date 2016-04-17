var isInside = require('./is-inside');

module.exports = function (array) {
  var list = {};
  var total = array.length;
  array.forEach(function (item) {
    if (isInside(item, list)) {
      list[item]++;
    } else {
      list[item] = 1;
    }
  });
  for(var index in list) {
    list[index] = Math.round((list[index] / total) * 100);
  };
  return list;
};
