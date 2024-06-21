// 找到字符串中的大寫字母
function findUpperCase(str) {
    const reg = /[A-Z]/g;
    return str.match(reg);
}
console.log(findUpperCase("Hello World")); // ["H", "W"]

