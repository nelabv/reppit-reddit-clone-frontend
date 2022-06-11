import axios from "axios";

export default axios.create({
  baseURL: "https://reddit-clone-backend2021.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});