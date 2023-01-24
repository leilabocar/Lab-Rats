const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 4000;
const hostname = '127.0.0.1';
var bodyParser = require('body-parser');
var dateTime = require('node-datetime');
var dt = dateTime.create();
const cors = require("cors")
app.use(cors())
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
const path = require('path');
const { connect } = require("http2");


// MYSQL CONNECTION
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "camera",
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to Database!");
});

// DEFAULT PAGE WITH CREATES
app.get('/', function (req, res) {
    // CREATE DATABASE IF NOT EXISTING YET
    connection.query("CREATE DATABASE IF NOT EXISTS camera",
        function (err, results) {
            if (err) throw err;
            console.log(req.query);
            console.log(results);
        });

    // CREATE TABLES IF NOT EXISTING YET
    var user_table = ("CREATE TABLE IF NOT EXISTS user_table (id INT AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(45), lastname VARCHAR(45), phone VARCHAR(45), address1 VARCHAR(45), address2 VARCHAR(45), email VARCHAR(45))")
    var camera_table = ("CREATE TABLE IF NOT EXISTS camera_table (id INT AUTO_INCREMENT PRIMARY KEY, image LONGBLOB, datetime VARCHAR(100) )")

    connection.query(user_table, function (err, result) {
        if (err) throw err;
        console.log(result);
        console.log("User Table created!");
    });

    connection.query(camera_table, function (err, result) {
        if (err) throw err;
        console.log(result);
        console.log("Camera Table created!");
    });

    res.send('WELCOME!')


});