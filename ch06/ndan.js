const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("단수를 입력하지마시오 : ", function(dan){
for(let i=1; i<=9; i++){
  console.log(dan+'*'+i+'='+(dan*i));
}
  rl.close();
})