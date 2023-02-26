import axios from "axios";

const instance = axios.create({
  baseURL: "https://portfolio-backend-smws.onrender.com",
});

export default instance;
