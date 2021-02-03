const TABLE = "auth";

module.exports = (injectedStore) => {
  let store = injectedStore;
  if (!store) {
    store = require("../../../db/mysql");
  }

  const upsert = (data) => {
    const authData = {
      id: data.id,
    };
    if (data.userName) {
      authData.userName = data.userName;
    }
    if (data.password) {
      authData.password = data.password;
    }

    return store.upsert(TABLA, authData);
  };

  const login = (username, password) => {
      const data = await store.query(TABLA, {username: username})
  }

  return {
    upsert,
  };
};
