import axios from "axios";

// 創建axios實體 把基本參數設定好
// 後續只要 改參數路徑不同就好 然後去執行不同CRUD
const authRequest = axios.create({
  baseURL: "https://vue-lessons-api.herokuapp.com/"
});

export const postLoginRequest = (data) => {
  return authRequest.post("/login", data);
}

export const postTestToken = token => {
  authRequest.defaults.headers.common["Authorization"] = token;
  return authRequest.post("/testToken");
};
