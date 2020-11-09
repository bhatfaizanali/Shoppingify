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

export function getLists() {
  return axios.get("/lists");
}

export function createList(currentList) {
  return axios.post("/lists", {
    list_name: currentList.name,
    list_status: currentList.status,
    list_date: currentList.date,
    list_items: currentList.items,
  });
}
