const professor = require("../api/components/professors/professors.routes");
const student = require("../api/components/students/students.routes");
const routes = (server) => {
  server.use("/api/professor", professor);
  server.use("/api/student", student);
};

module.exports = routes;
