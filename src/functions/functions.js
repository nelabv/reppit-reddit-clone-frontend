import UserServices from "../services/user";

export const login = (userData, userLogin) => {
  UserServices.login(userData)
    .then((response) => {
      userLogin(userData.username);
    
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("name", userData.username);
    })
    .catch((error) => {
      console.log(error.response);
    })
} 