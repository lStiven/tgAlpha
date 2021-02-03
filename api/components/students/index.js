const controller = require("./students.controller");
const store = require("../../../db/students.mysql.js");

module.exports = controller(store);
