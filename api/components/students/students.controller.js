const TABLE = "students";
const checks = require("../../../network/validations");
module.exports = (injectStore) => {
  let store = injectStore;
  if (!injectStore) {
    store = require("../../../db/students.mysql");
  }

  const add = (student) => {
    return new Promise((resolve, reject) => {
      let newStudent = {
        id_student: "",
        name: "",
        student_code: "",
        student_program: "",
        email: "",
        phone: "",
        password: "",
      };
      if (!student) {
        return reject("Missing student");
      }

      if (student.id_student === undefined) {
        newStudent.id_student = null;
      }

      if (student.name === undefined) {
        return reject("Missing name");
      }

      if (student.student_code === undefined) {
        return reject("Missing code");
      }

      if (student.student_program === undefined) {
        return reject("Missing program");
      }

      if (student.email === undefined) {
        return reject("Missing email");
      } else {
        if (!checks.checkEmail(student.email)) {
          return reject(
            "Invalid e-mail, it must be contain '@correounivalle.edu.co' as domain."
          );
        }
        newStudent.email = student.email;
      }

      if (student.phone !== undefined) {
        if (!checks.checkPhone(student.phone)) {
          return reject("Type a valid phone number");
        } else {
          newStudent.phone = student.phone;
        }
      }
      newStudent.name = student.name;
      newStudent.student_code = student.student_code;
      newStudent.student_program = student.student_program;
      resolve(store.addOne(TABLE, newStudent));
    });
  };

  return {
    add,
  };
};
