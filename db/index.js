const mysql = require("mysql");
const config = require("../config");

const connection = mysql.createConnection({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
});

connection.connect((err) => {
  err
    ? console.error("Error connecting: " + err.stack)
    : console.log("Data Base Connected!");
});

module.exports = connection;
