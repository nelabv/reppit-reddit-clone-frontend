import axios from "axios";

export default axios.create({
  baseURL: "https://tidbit-beta.herokuapp.com/api/v1/redditclone",
  headers: {
    "Content-type": "application/json"
  }
});