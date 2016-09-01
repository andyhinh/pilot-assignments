

function flatten(array) {
  var list = array.reduce(function(a, b) {
    return a.concat(b);
  }, []);
  return list;
}

module.exports = flatten;
