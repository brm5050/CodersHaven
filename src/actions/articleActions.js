import axios from "axios";

export function userArticleRequest(userData) {
  console.log("article/post submission getting pushed to the backend: ", userData);
  return dispatch => {
    return axios.post("/api/article", userData);
  }
}
