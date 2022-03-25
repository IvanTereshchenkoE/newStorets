import axios from "axios";

const myApi = axios.create({
  baseURL: "http://localhost:5999/api/jobs",
  headers: {
    "Content-type": "application/json",
  },
});

export default myApi;
