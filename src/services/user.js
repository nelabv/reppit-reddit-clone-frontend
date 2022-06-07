import http from "../http";

class UserServices {
  login(loginDocument) {
    return http.post("/login", loginDocument)
  }

  register(newUser) {
    return http.post("/register", newUser)
  }

  fetchUserInformation(username, token) {
    return http.get(`/users/${username}/`, { 
      headers: { "Authorization" : `Bearer ${token}`}
    });
  }
};

export default new UserServices();