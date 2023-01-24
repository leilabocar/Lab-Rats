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

// Home
app.get("/", (req, res) => {
    console.log(req.query);
    res.send("Hello");
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

  app.get("/rpi", (req, res) => {
    connection.query(
        "SELECT * FROM camera",
        function (err, results) {
            if (err) throw err;
            try {
                if (results.length > 0) {
                    let base64array = [];
                    for (let i = 0; i < results.length; i++) {
                        base64array.push({
                            data: new Buffer.from(results[i].image).toString("utf8"),
                        });
                    }
                    res.json(base64array);
                    console.log(results);
                }
            }
            catch (err) {
                res.json({ message: err });
            }

        })
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
