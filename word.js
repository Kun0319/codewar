//尋找第一個不重複的字母
function firstNonRepeatingLetter(s) {
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (s.indexOf(c) === s.lastIndexOf(c)) {
            return c;
        }
    }
}

