const is_login = true;
const is_admin = false;
console.log(is_login && is_admin);
console.log(true || false);
console.log(false || false);

let id = "isegyeidol@parable.com";
let pw = "210824";
let correct_id = "isegyeidol@wak.com"
let correct_pw = "211217"
let result = (id === correct_id && pw === correct_pw) ? "login successfully" : "wrong ID or password";
console.log(result);

console.log(!true);
console.log(!null);

let email= "waktaverse";
let result2 = (email !== null && id !== undefined) ? "email conform" : "wrong email";
let result3 = (email ?? null) ? "email conform" : "wrong email";
console.log(result2)
console.log(result3)
console.log(null ?? "기본값");
console.log(undefined ?? "default")
console.log("hi" ?? "default")