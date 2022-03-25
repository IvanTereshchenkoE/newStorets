import axios from "axios";

const myApi = axios.create({
  baseURL: "http://localhost:5999/api/vacancy",
});

export default myApi;
