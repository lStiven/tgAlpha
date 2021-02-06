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
        console.log(`User added`);
        return resolve(results);
      }
    );
  });
};

const getById = (table, id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${table} where id_student = ${id}`,
      (err, results, fields) => {
        if (err) {
          return reject(`Some error getting by id: ${err.message}`);
        }
        if (results.length === 0) {
          console.log("Student doesn't exist");
          return reject(`There is not a student identified with id:${id}`);
        }
        console.log(`Got student: ${results[0].name}`);
        resolve(results);
      }
    );
  });
};

const list = (table) => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table}`, (err, results, fields) => {
      if (err) {
        return reject(`Some error getting by id: ${err.message}`);
      }
      if (results.length === 0) {
        console.log(`${table} is empty`);
        return resolve(`There are not rows in ${table} table`);
      }
      console.log("Loading data");
      resolve(results);
    });
  });
};

const patchById = (table, data, id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE ${table} set ? WHERE id_student=${id}`,
      [data],
      (err, results, fields) => {
        if (err) {
          console.log(`Some error in query: ${err.message}`);
          return reject(`Error in query: ${err.message}`);
        }
        console.log(`Updating data of ${data.name}`);
        resolve(`User ${data.name}: ${results.message}`);
      }
    );
  });
};

module.exports = {
  addOne,
  getById,
  list,
  patchById,
};
