// filter可以對陣列進行過濾 這裡的條件為過濾出數字 可以再換成其他條件 比如長度大於3的字串 .length>3
function filter_list(l) {
    return l.filter(item => typeof item === 'number');
}

console.log(filter_list([1,2,'aasf','1','123',123])); // [1,2,123]