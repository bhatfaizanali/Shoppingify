import axios from "axios";

axios.defaults.baseURL = `http://localhost:8080/`;

export function getItems() {
  return axios.get("/items");
}

export function createItem(
  item_name,
  item_note,
  imgURL,
  category_id,
  category_name,
) {
  return axios.post("/items", {
    item_name,
    item_note,
    imgURL,
    category_id,
    category_name,
  });
}
