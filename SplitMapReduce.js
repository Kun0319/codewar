// 這是一個找出範圍內的數字，其數字的每個位數的次方和等於該數字的數字的函數
function findNumbers(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        if (i === powerSum(i)) {
            result.push(i);
        }
    }
    return result;
}
// 這是一個找出數字的每個位數的次方和的函數
function powerSum(n) {
    return String(n)
        .split('')
        .map(Number)
        .reduce((acc, cur, idx) => acc + Math.pow(cur, idx + 1), 0);
}

console.log(findNumbers(0, 100)); 
