var console = require('./lib/consolelog.js');

module.exports = function triangle() {
  var total = "";
  for (var currentLoop = 0; currentLoop < 7; currentLoop++) {
    total += "#";
    console.log(total);
  }
}
