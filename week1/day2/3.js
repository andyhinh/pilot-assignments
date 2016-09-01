

function isPrime(num, base) {
  if (num === base) {
    return true;
  }
  if (num % base === 0 || num < 2) {
    return false;
  }
  return isPrime(num, base + 1);
}

module.exports = isPrime;
