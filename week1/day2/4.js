

function toStringArray(num) {
  var rObj = [];
  var obj = num.map(function(value) {
    var rStr = '' + value;
    rObj.push(rStr);
  })
  return rObj;
}

module.exports = toStringArray;
