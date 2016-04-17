module.exports = function (date) {
  date = date.getDay();
  if (date == 0) return 7;
  return date;
};
