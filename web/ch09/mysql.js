const mysql = require("mysql2");
const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"211217",
    database:"gbsw_web",
});

conn.connect();

conn.query("select * from Users", (err, rows, fields) => {
    if(err){
        console.log(err);
        throw err;
    }
    console.log(rows);
});