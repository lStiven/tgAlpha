const connection = require(".");

const addOne = (table, student) => {
  return new Promise((resolve, reject) => {
    // console.log(student);
    connection.query(
      `INSERT INTO ${table} VALUES (?)`,
      [Object.values(student)],
      (err, results, fields) => {
        if (err) {
          return reject(`Some error in POST: ${err.message}`);
        }
        return resolve(results);
      }
    );
  });
};

module.exports = {
  addOne,
};
