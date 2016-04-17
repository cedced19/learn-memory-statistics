var list = {};

var checker = function (value) {
  for (var x in list) {
    if (x == value) {
      return true;
    }
  }
  return false;
};

module.exports = function (array) {
  list = {};
  var total = array.length;
  array.forEach(function (item) {
    if (checker(item)) {
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
