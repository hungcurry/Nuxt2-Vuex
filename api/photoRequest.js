import axios from "axios";

// 課程用API
// vue-lessons-api.herokuapp.com/photo/list  (圖片列表)

// 創建axios實體 把基本參數設定好
// 後續只要 改參數路徑不同就好 然後去執行不同CRUD
const photoRequest = axios.create({
  baseURL: "https://vue-lessons-api.herokuapp.com"
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
  // .....
});

export const getPhotoRequest = () => photoRequest.get("/photo/list");
export const postPhotoRequest = () => photoRequest.post("/photo/list/post");

/* ===================
....... 攔截器 .......
==================== */
// 送出API以前
// axios.interceptors 改 photoRequest
photoRequest.interceptors.request.use(
  (config) => {
    console.log("送出API以前", config);
    // if( config.data === undefined ) throw { response : { statusText : "資料不得為空"} }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 拿回資料以前
// axios.interceptors 改 photoRequest
photoRequest.interceptors.response.use(
  (response) => {
    console.log("拿回資料以前", response);

    // 客制化 自己做驗證判斷 如果不通過就會跑到 Error
    if (response.data.length < 9) {
      throw "資料沒有大於10筆";
    }

    return response;
  },
  (error) => {

    // 客制化錯誤
    if (error.response.status === 404) {
      throw "Not Found 404";
    }

    return Promise.reject(error);
  }
);
