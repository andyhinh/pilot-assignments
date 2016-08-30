var console = {log: args => args}

module.exports = function chessboard() {
  var size = 8;
  for (var length = 0; length < size; length++) {
    var line = '';
    for (var width = 0; width < size; width++) {
      if (length % 2 == 0) {
        if (width % 2 == 0) {
          line += '#';
        } else {
          line += ' ';
        }
      } else {
        if (width % 2 == 0) {
          line += ' ';
        } else {
          line += '#';
        }
      }
    }
    console.log(line);
  }
}
