// 問答程式
const questions = [{
    prompt: "1+1=?\n(a)2\n(b)3\n(c)4\n(d)5",
    answer: "a"
}, {
    prompt: "3+1=?\n(a)4\n(b)5\n(c)6\n(d)7",
    answer: "a"
}, {
    prompt: "1+5=?\n(a)4\n(b)6\n(c)7\n(d)8",
    answer: "c"
},
]
let score = 0;
// 迴圈出問題
for (let i = 0; i < questions.length; i++) {
    let input = prompt(questions[i].prompt);
    if(input==questions[i].answer){
      score++;
      alert("答對了!");
    }else{
      alert("錯誤!");
    }
}

alert(`總共答對了${score}題`)