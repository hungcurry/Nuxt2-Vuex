import { apiGetPhotoData } from "../../api";
// state
export const state = () => ({
  photoArr : [],
})
// getters
export const getters = {
  photoArr(state){
    return state.photoArr;
  }
}
// actions
export const actions = {
  // 管理API方式寫法 + async / await
  async handInit({ commit }) {
    try {
      const res = await apiGetPhotoData();
      commit("setInit", res.data);
    } 
    catch (error) {
      // 原本方式
      // console.log(error.response.statusText);

      // 如果使用API管理方式 統一這樣寫 就會取的錯誤資訊
      console.log("錯誤處理:", error);
      this.$notify({
        group: "foo",
        title: "API資料錯誤",
        type: "error",
        text: error
      });
    }
  },
}
// mutations
export const mutations = {
  setInit(state, data) {
    state.photoArr = data;
    // console.log("mutations", state.photoArr);
  },
}
