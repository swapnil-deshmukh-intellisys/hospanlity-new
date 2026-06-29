const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hostpitality_db"
});

db.connect((err) => {
  if (err) {
    console.log("DB Error", err);
  } else {
    console.log("MySQL Connected");
  }
});

// REGISTER
app.post("/register", (req, res) => {
  const { email, password } = req.body;

  const sql = "INSERT INTO users (email, password) VALUES (?,?)";

  db.query(sql, [email, password], (err) => {
    if (err) return res.send(err);
    res.send({ message: "User Registered" });
  });
});

// LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql =
    "SELECT * FROM users WHERE email=? AND password=?";

  db.query(sql, [email, password], (err, result) => {
    if (err) return res.send(err);

    if (result.length > 0) {
      res.send({ success: true });
    } else {
      res.send({ success: false });
    }
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});