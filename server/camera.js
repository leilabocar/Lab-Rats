const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3002;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({limit: '50mb', extended: false }))
app.use(bodyParser.json({limit: '50mb'}))

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "login_signup",
});


// CREATE
app.post("/motion", (req, res) => {
  console.log(req.body.photo)
    // insert query to database
    connection.execute(
      "INSERT INTO camera (start, end, photo) VALUES(?, ?, ?)",
      [req.body.start, req.body.end, req.body.photo],
      (err, results) => {
        if (results?.affectedRows > 0) {
          res.json({ message: "New data has been added!" });
        } else {
          res.json({ message: err });
        }
      }
    );
  });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
