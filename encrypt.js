// 加密
function encrypt(text, n) {
  if (!text || n <= 0) return text;
  while (n--) {
    let ans = '';
    for (let i = 1; i < text.length; i += 2) {
      ans += text[i];
    }
    for (let i = 0; i < text.length; i += 2) {
      ans += text[i];
    }
    text = ans;
  }
  return text;
}


// function decrypt(encryptedText, n) {
//     for (let i = 0; i < n; i++) {
//         encryptedText = encryptedText.split(' ').map(word => {
//             let evenChars = word.slice(Math.floor(word.length / 2));
//             let oddChars = word.slice(0, Math.floor(word.length / 2));
//             let decryptedWord = '';
//             for (let j = 0; j < evenChars.length; j++) {
//                 decryptedWord += evenChars[j] + (oddChars[j] || '');
//             }
//             return decryptedWord;
//         }).join(' ');
//     }
//     return encryptedText;
// }


function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join('');
  }
  return encryptedText;
}

console.log(encrypt("This is a test!", 1));
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1));

