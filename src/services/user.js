import http from "../http";

class UserServices {
  login(loginDocument) {
    return http.post("/login", loginDocument)
  }

  register(newUser) {
    return http.post("/register", newUser)
  }
};

export default new UserServices();