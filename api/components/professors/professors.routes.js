const express = require("express");
const router = express.Router();
const response = require("../../../network/response");
const controller = require("./index");

router.post("/", (req, res) => {
  // console.log(req.body);
  controller
    .add(req.body)
    .then((data) => {
      console.log(`Done!, affected rows: ${data.affectedRows}`);
      response.success(req, res, data, 201);
    })
    .catch((error) => {
      response.error(req, res, error, 500);
    });
});

router.get("/", (req, res) => {
  controller
    .list()
    .then((data) => {
      response.success(req, res, data, res.statusCode);
    })
    .catch((error) => {
      response.error(error);
    });
});

router.get("/:id", (req, res) => {
  controller
    .getOne(req.params.id)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(req, res, error, 500);
    });
});

router.patch("/:id", (req, res) => {
  controller
    .update(req.params.id, req.body)
    .then((message) => {
      console.log(`update returns: ${message}`);
      response.success(req, res, message, res.statusCode);
    })
    .catch((error) => {
      response.error(req, res, error, 400);
    });
});

module.exports = router;
