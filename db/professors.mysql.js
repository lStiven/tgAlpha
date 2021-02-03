const connection = require(".");

const findAll = (table) => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table}`, (error, results, fields) => {
      if (error) {
        reject("Error: " + error.message);
      }

      if (results.length === 0) {
        resolve("There is not results");
      }

      resolve(results);
    });
  });
};

const findById = (table, id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${table} WHERE id_professor=${id}`,
      (error, results, fields) => {
        if (error) {
          return reject(`Error in mysql: ${error}`);
        }
        if (results.length === 0) {
          return reject("Doesn't exists");
        }
        resolve(results);
      }
    );
  });
};

const addOne = (table, professor) => {
  return new Promise((resolve, reject) => {
    let query = `INSERT INTO ${table} (code, name, email, phone) VALUES (?)`;
    let post = {
      code: professor.code,
      name: professor.name,
      email: professor.email,
      phone: professor.phone || null,
    };
    connection.query(query, [Object.values(post)], (error, results, fields) => {
      if (error) {
        console.log(error.message);
        reject("Some error in post query");
      } else {
        console.log(results.message);
        resolve(results);
      }
    });
  });
};

const patchById = (table, id, data) => {
  return new Promise((resolve, reject) => {
    let query = `UPDATE ${table} SET ? WHERE id_professor=${id}`;
    // console.log(data);
    connection.query(query, [data], (err, results, fields) => {
      if (err) {
        console.log(`Error: ${err.message}`);
        reject("Some error in patch query");
      } else {
        console.log(results.message);
        resolve(results.message);
      }
    });
  });
};

module.exports = {
  findAll,
  findById,
  addOne,
  patchById,
};
