// 圖片API
import { getPhotoRequest } from "./photoRequest.js";
export const apiGetPhotoData = getPhotoRequest;

// 後台登入
import { postLoginRequest, postTestToken } from "./authRequest.js";
export const apiPostLoginRequest = postLoginRequest;
export const apiPostTestToken = postTestToken;
