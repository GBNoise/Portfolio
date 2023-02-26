import axios from "axios";

const instance = axios.create({
  baseURL: "https://portfolio-bend.herokuapp.com",
});

export default instance;
