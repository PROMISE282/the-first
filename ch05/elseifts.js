const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("점수를 입력 해해해 : ", function (score) {
    if(score>=90 && score<=100){
        console.log("돈받아라")
    } else if(60<=score && 90>=score){
        console.log("계탔다.");
    } else if(0<=score && score<60){
        console.log("에휴");
    } else {
        console.log("개소리");
    }
    rl.close();
});