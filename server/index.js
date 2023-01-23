const express = require("express");
const boddParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const db = require('./db');

const app = express();

app.use(boddParser.json());
app.use(boddParser.urlencoded({ extended: true}));
app.use(expressSession({ secret: 'mySecretKey', resave: false, saveUninitialized: false}));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(cookieParser('mySecretKey'));

app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

app.get('/', (req, res) => {
    res.send("HELLO");
});

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const cpassword = req.body.cpassword;

    const query = "INSERT INTO account (`username`, `email`, `password`, `cpassword`) VALUES (?, ?, ?, ?)";
    const query2 = "SELECT * FROM account WHERE username = ?";
    
    db.query(query2, [username], (err, result) => {
        if(err) {throw err;}
        if(result.length > 0) {
            console.log("Username Already Exist!!")
            res.send({message: "Username Already Exist!!"});
        }
        if(result.length === 0){
            const hashedPassword = bcrypt.hashSync(password, 10);
            const hashedCPassword = bcrypt.hashSync(cpassword, 10);
            db.query(query, [username, email, hashedPassword, hashedCPassword], (err, result) => {
                if(err) {throw err;}
                console.log("User Created.")
                res.send({message: "User Created."});
            })
        }
    });
});

app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if(err) {throw err;}
        if(!user) {
            console.log("USER DOES NOT EXIST!")
            res.send("USER DOES NOT EXIST!");
            }

        if(user) {
            req.login(user, (err) => {
                if(err) {throw err;}
                console.log("USER LOGGED IN.")
                res.send("USER LOGGED IN.");
                console.log(user);
             
            })
        }
    })(req, res, next);
});

app.post('/changepassword', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const query = `UPDATE account SET password = ? WHERE username = ?`;
    //const query = "INSERT INTO user_accounts (`username`, `password`) VALUES (?, ?)";
    //const query2 = "SELECT * FROM user_accounts WHERE username = ?";

    const hashedPassword = bcrypt.hashSync(password, 10);
    db.query(query, [hashedPassword, username], (err, result) => {
        if(err) {throw err;}
        console.log("Account Password Change")
        res.send({message: "Account password updated!"});
    })

});


app.get('/getUser', (req, res) => {
    res.send.apply(req.user);
});

app.listen(3001, () => {
    console.log("Server Started on port 3001")
});