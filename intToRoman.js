

// 將數字轉換成羅馬數字

let num = prompt("Enter a number")

function intToRoman(num) {
    num = parseInt(num);    
    const romanNumerals = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1,
    }
    let result = '';

    // 在javascript中使用>=時會將型態轉換成數字
    // key會是羅馬對應表的字串部分的索引 迴圈出所有羅馬數字
    for (let key in romanNumerals) {
        // 然後判斷是輸入的數字大於或等於羅馬數字對應的數字
        while (num >= romanNumerals[key]) {
            // 比如1989 會先減去1000 之後會剩下989
            // 並將1000對應的羅馬數字M加到result中做字串相加
            result += key;
            // 然後剩下的989會繼續減去900 之後會剩下89
            // 並將900對應的羅馬數字CM加到result中做字串相加
            num -= romanNumerals[key];
        }
    }
    return result;
}

alert(intToRoman(num))