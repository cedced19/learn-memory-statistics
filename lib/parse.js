var parser = function (string) {
  return string.replace(/&#39;/gi, '\'')
               .replace(/\n/gi, ' ')
               .replace(/<.[^>]*>/gi, ' ')
               .replace(/&quot/gi, '"')
};

module.exports = function (data) {
  if (data.length) {
    data.forEach(function (item) {
      item.content = parser(item.content);
    });
  } else {
    data.content = parser(data.content);
  }
  return data;
};
