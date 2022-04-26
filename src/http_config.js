import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8081/api",
  timeout:1000,
  headers: {
    "Content-type": "application/json"
  }
});