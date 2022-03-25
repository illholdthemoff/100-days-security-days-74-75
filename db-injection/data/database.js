const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  database: "security",
  user: "root",
  password: "!som1%eof2a&poo1(patro4opa",
  multipleStatements: true,
});

module.exports = pool;
