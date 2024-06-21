// 找出一個數字的質因數分解
function primeFactors(n) {
    let factors = {};
    let divisor = 2;
    while (n > 2) {
        if (n % divisor === 0) {
        if (factors[divisor]) {
            factors[divisor]++;
        } else {
            factors[divisor] = 1;
        }
        n = n / divisor;
        } else {
        divisor++;
        }
    }
    return Object.keys(factors).map((key) => {
        return factors[key] === 1 ? `(${key})` : `(${key}**${factors[key]})`;
    }).join('');
}

console.log(primeFactors(7775460));
// "(2**2)(3**3)(5)(7)(11**2)(17)"
console.log(primeFactors(18));