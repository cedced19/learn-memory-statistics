module.exports = function (value, array) {
  for (var x in array) {
    if (x == value) {
      return true;
    }
  }
  return false;
};
