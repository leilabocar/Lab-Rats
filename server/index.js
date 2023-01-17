const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        password: "",
        database: "register"
    }
)

app.post('/register', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const cpassword = req.body.cpassword;

    con.query("INSERT INTO users (username, email, password, cpassword) VALUES(?, ?, ?, ?)", [username, email, password, cpassword],
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    con.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password,],
        (err, result) => {
            if(err){
                res.setEnconding({err: err});
            }else{
                if(result.length > 0 ){
                    res.send(result);
                }else{
                    res.send({message: "WRONG USERNAME OF PASSWORD"});
                }
            }
        }
    )
})

app.listen(3001, () => {
    console.log("Server started on port 3001");
});