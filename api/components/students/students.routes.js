const express = require("express");
const router = express.Router();
const response = require("../../../network/response");
const controller = require("./index");

router.post("/", (req, res) => {
  controller
    .add(req.body)
    .then((data) => {
      console.log(`Done!, affected rows: ${data.affectedRows}`);
      response.success(req, res, data, 201);
    })
    .catch((error) => {
      response.error(req, res, error, 400);
    });
});

module.exports = router;
