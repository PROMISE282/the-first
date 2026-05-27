const color = ["R", "G", "B"]
const langs = ["c#", "js", "java", "php", "rust", "c++", "kotlin"]
//let r = color[0];
//let g = color[1];
//let b = color[2];

const arr1 = [1, 2];
const arr2 = [3, 4];

const arr3 = [...arr1, ...arr2]

let [first, seconde, third = "C", ...rest] = langs
// ... <= 전개연산자
//object에서도 똑같이 사용가능


let [r, g, b = "C"] = ["C#", "js", "Solidity"];

[b, g, r] = [r, g, b];

console.log(r);
console.log(g);
console.log(b);

const user = {
    id : "gbsw",
    pw : "1234",
    name : "김성윤",
    age : 27,
}

let {id, pw, name, age} = user;