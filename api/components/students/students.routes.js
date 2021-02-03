const express = require("express");
const { resolve } = require("path");
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

router.get("/:id", (req, res) => {
  controller
    .getOne(req.params.id)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(req, res, error, 400);
    });
});

router.get("/", (req, res) => {
  controller
    .getAll()
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(req, res, error, 400);
    });
});

router.patch("/:id", (req, res) => {
  controller
    .update(req.params.id, req.body)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((error) => {
      response.error(req, res, error, 400);
    });
});

module.exports = router;
