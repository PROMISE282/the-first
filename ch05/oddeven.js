const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("정수를 입력하지마시오 : ", function (num) {
    if(num%2==0){
        console.log("짝짝짝수")
    } else if(num%2==1){
        console.log("홀홀수")
    } else {
        console.log("정수를 입력하라고")
    }
    rl.close();
}); //인식 가능 최대값 9007199254740991