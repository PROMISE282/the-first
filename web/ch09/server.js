const express = require("express");
const app = express();
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

app.listen(3000, () => {
    console.log("3000번 포트 서버 대기 중");
});

app.get("/", (req, res) => {
    res.send("내 서버다.");
});

app.get("/test", (req, res) => {
    res.send("내 서버일까?");
});

app.get("/micael", (req, res) => {
    res.send("<i>마이클 잭슨</i>");
});

app.get("/user", (req, res) => {
    conn.query("select * from Users", (err, rows, fields) => {
        if(err){
            throw err;
        }
        res.json({rows});
    });
});

app.get("/user/:id", (req, res, next) => {
    if(req.params.id === "0"){
        next();
    };

    conn.query("select * from Users where Id = " + req.params.id, (err, rows, fields) => {
        if(err){
            throw err;
        };
        res.json({rows});
    });
});

app.get("/gmail", (req, res) => {
    res.send("ksy30240@gmail.com");
});