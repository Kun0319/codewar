// let friends = ["John", "Mary", "Alex", "Tom"];


// for (i = 0; i < friends.length; i++) {
//     document.write(friends[i] + "<br>");
// }

// 巢狀迴圈
let number = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]
];

for (let i = 0; i < number.length; i++) {
    for (let j = 0; j < number[i].length; j++) {
        console.log(number[i][j]);
        // document.write(number[i][j]+"<br>");
    }
}
