const TABLE = "professors";
const checks = require("../../../network/validations");
module.exports = (injectedStore) => {
  let store = injectedStore;
  if (!store) {
    store = require("../../../db/professors.mysql");
  }

  const list = () => {
    return store.findAll(TABLE);
  };

  const getOne = (id) => {
    return store.findById(TABLE, id);
  };

  const add = (professor) => {
    // console.log(professor);
    return new Promise((resolve, reject) => {
      if (!professor) {
        return reject("Missing professor");
      }
      if (professor.code === undefined) {
        return reject("Missing code");
      }
      if (professor.name === undefined) {
        return reject("Missing name");
      }
      if (professor.email === undefined) {
        return reject("Missing e-mail");
      } else {
        if (!checks.checkEmail(professor.email)) {
          return reject(
            "Invalid e-mail, it must be contain '@correounivalle.edu.co' as domain."
          );
        }
      }

      resolve(store.addOne(TABLE, professor));
    });
  };

  const update = (id, data) => {
    return new Promise((resolve, reject) => {
      if ((!id, !data)) {
        reject("Missing arguments");
      }
      store
        .findById(TABLE, id)
        .then((results) => {
          let query = results[0];
          let updateData = {};
          if (!data.phone) {
            updateData.phone = query.phone;
          } else {
            if (!checks.checkPhone(data.phone)) {
              return reject("Type a valid phone number");
            }
            updateData.phone = data.phone;
          }
          if (!data.email) {
            updateData.email = query.email;
          } else {
            if (!checks.checkEmail(data.email)) {
              return reject(
                "Invalid e-mail, it must be contain '@correounivalle.edu.co' as domain."
              );
            }
            updateData.email = data.email;
          }
          updateData.code = query.code;
          updateData.name = query.name;
          resolve(store.patchById(TABLE, id, updateData));
        })
        .catch((error) => {
          reject(`Error with id: ${error}`);
          console.log(`Error with id: ${error}`);
        });
    });
  };

  return {
    list,
    getOne,
    add,
    update,
  };
};
