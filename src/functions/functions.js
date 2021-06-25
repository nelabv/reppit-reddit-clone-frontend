import UserServices from "../services/user";

export const login = (userData, userLogin) => {
  console.log("HELLO");

  UserServices.login(userData)
    .then((response) => {
      userLogin(userData.username);
    
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", userData.username);
    })
    .catch((error) => {
      console.log(error.response);
    })
} 