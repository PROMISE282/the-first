const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("C드라이브 포맷할거? : ", function (ch) {
    switch(ch){
        case 'y':
            console.log("포맷함");
            break;
        case 'n':
            console.log("포맷안함");
            break;
        default:
            console.log("유효하지 않아");
            break;
    }
    rl.close();
});