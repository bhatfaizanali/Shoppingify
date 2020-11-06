import axios from "axios";

axios.defaults.baseURL = `http://localhost:8080/`;

export function getItems() {
  return axios.get("/items");
}
