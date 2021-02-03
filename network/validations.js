const checkEmail = (email) => {
  const verifyEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@correounivalle.edu.co$/.test(
    email
  );
  return verifyEmail;
};

const checkPhone = (phone) => {
  const verifyPhone = /^[0-9]{10}$/.test(phone);
  return verifyPhone;
};

module.exports = {
  checkPhone,
  checkEmail,
};
