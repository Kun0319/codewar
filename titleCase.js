function titleCase(title, minorWords) {
    if (title === '') return '';

    // 将标题字符串和次要单词字符串都转换为小写
    title = title.toLowerCase();
    minorWords = (minorWords || '').toLowerCase();

    // 将标题字符串拆分成单词数组
    let words = title.split(' ');

    // 将次要单词字符串拆分成次要单词数组
    let minorWordsArray = minorWords.split(' ');

    // 对每个单词进行转换
    for (let i = 0; i < words.length; i++) {
        // 如果是第一个单词或者不在次要单词数组中，则将首字母大写
        if (i === 0 || minorWordsArray.indexOf(words[i]) === -1) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
    }

    // 将单词数组连接成字符串并返回
    return words.join(' ');
}

console.log(titleCase('a clash of KINGS', 'a an the of'));

console.log(titleCase('a clash of KINGS', 'a an the of'));
console.log(titleCase('a clash of KINGS', 'a an the of')); // should return: 'A Clash