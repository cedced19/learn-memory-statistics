var franc = require('franc');
var iso6393 = require('iso-639-3');


module.exports = function (string) {
  var detected = franc(string);
  for (var i = 0; i < iso6393.length; i++) {
       if (detected === iso6393[i].iso6393) {
           return iso6393[i].name;
      }
  }
  return  'Undifined language';
}:
