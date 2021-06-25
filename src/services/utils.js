class Utility {
  storeTokenInLocalStorage(token) {
    localStorage.setItem("token", token);
  }
};

export default new UserServices();