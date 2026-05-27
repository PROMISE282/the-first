const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("숫자 입력하지말지마", function (num) {
    switch(parseInt(num)){
        case 1:
            console.log("엄마한테 전화하기");
            break;
        case 2:
            console.log("아빠한테 전화하기");
            break;
        case 3:
            console.log("형한테 보이스피싱하기");
            break;
        default:
            console.log("없는 단축키");
            break;
    }
    rl.close();
});