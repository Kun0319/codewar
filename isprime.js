function isPrime(num) {
    if (num < 2) return false;
    for (let k = 2; k <= Math.sqrt(num); k++) {
        if (num % k === 0) {
            return false;
        }
    }
    return true;
}
  console.log(isPrime(4)); // should return: true
  console.log(isPrime(-1)); // should return: false