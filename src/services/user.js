import http from "../http";

class UserServices {
  login(loginDocument) {
    return http.post("/login", loginDocument)
  }

  register(newUser) {
    return http.post("/register", newUser)
  }

  fetchUserInformation(token) {
    return http.get("/get-user", { headers: {"Authorization" : `Bearer ${token}`} })
  } 
};

export default new UserServices();