const controller = require("./professors.controller");
const store = require("../../../db/professors.mysql");

module.exports = controller(store);
