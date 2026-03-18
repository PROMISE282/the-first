const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("나이를 입력하지마시오 : ", function (age) {
    if(age>=19 && age<=100){
        console.log("성인군자입니다.");
    } else if(age<19 && age>=1){
        console.log("어린이날입니다.");
    } else {
        console.log("잘못된 나이이다.");
    }
    rl.close();
});