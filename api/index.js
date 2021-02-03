// imports and create server
const express = require("express");
const app = express();
const db = require("../db/professors.mysql");
const bodyParser = require("body-parser");
const router = require("../network/routes");
// server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// config
const config = require("../config");

// routes
router(app);

// data base
// db.connection;

app.listen(config.port, () => {
  console.log(`API listenning in port ${config.port}`);
});
