import axios from "axios";

export function userCommentRequest(userData) {
  console.log("comment data for a single post getting pushed to the backend: ", userData);
  return dispatch => {
    return axios.post("/api/comment", userData);
  }
}
