

function isPrime(num) {
  for (var current = 2; current < num; current++) {
    if (num % current === 0) {
      return false;
    }
  }
  return num > 1;
}

module.exports = isPrime;
