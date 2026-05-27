const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("점수를 입력하지마시오 : ", function (score) {
    switch(score){
        case 91<=score:
            console.log("A");
            break;
        case 81<=score:
            console.log("B");
            break;
        case 71<=score:
            console.log("C");
            break;
        case 61<=score:
            console.log("D");
            break;
        case 0<=score:
            console.log("F")
            break;
        default:
            console.log("wrong number");
            break;
    }
    rl.close();
});