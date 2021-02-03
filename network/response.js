let response = {
  error: false,
  status: null,
  body: null,
  req: null,
};

const success = (req, res, message, statusCode) => {
  response.error = false;
  response.status = statusCode || 200;
  response.body = message || "Done";
  res.status(statusCode).send(response);
};

const error = (req, res, message, statuscode) => {
  response.error = true;
  response.body = message || "Internal server error";
  response.status = statuscode || 500;
  res.send(response);
};

module.exports = {
  success,
  error,
};
