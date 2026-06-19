const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nikhil@7002", // put your mysql password here
  database: "firenoc"
});

db.connect((err) => {
  if (err) {
    console.log("Database Error:", err);
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = db;