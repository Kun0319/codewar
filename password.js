let input;
let password = "123";
let attempts = 0;
let maxAttempts = 3;
let attemptTimes = false;

// while版本

// while (password != input && attempts < maxAttempts) {
//     attempts++;
//     console.log(attempts);
//     input = prompt("輸入你的密碼: ");
// }
// if (attempts >= maxAttempts) {
//     alert("你已經超過最大次數");
// } else {
//     alert("成功!");
// }

// for版本
for (let attempts = 1; attempts <= maxAttempts; attempts++) {
    console.log(attempts);
    input = prompt("輸入你的密碼: ");
    console.log(`您剩下 ${3 - attempts} 次機會`);
    if (password == input) {
        break;
    }
}
if (password != input) {
    alert("你已經超過最大次數");
} else {
    alert("成功");
}

