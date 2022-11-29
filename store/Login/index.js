import { apiPostLoginRequest, apiPostTestToken } from "../../api";
// state
export const state = () => ({
  isLogin: false,
  isLoading: false,
});

// getters
export const getters = {
  isLogin(state){
    return state.isLogin
  },
  isLoading(state){
    return state.isLoading
  },
};

// actions
export const actions = {
  async handAuth({ commit }, payload) {
    const { username, password } = payload;
    //console.log(username , password);
    const postData = { username,password }

    try {
      const res = await apiPostLoginRequest(postData);
      commit("setLogin", res);
    } catch (error) {
      console.log(error);
    }
  },
  async HandToken({ commit }, payload) {
    const { token } = payload;

    try {
      const res = await apiPostTestToken(token);
      commit("HandToken");
    } catch (error) {
      console.log(error);
      // 如果token 不存在 修改狀態false
      commit("handIsLogin", false);
      this.$cookies.removeAll();
    }
  },
  handIsLogin({ commit }, bool) {
    commit("handIsLogin", bool);
  },
};
// mutations
export const mutations = {
  setLogin(state, res) {
    console.log(res.data); //拿驗到驗證通過的token
    // 使用plugins / cookie.js
    this.$cookies.set("auth", { token: res.data.token });

    state.isLogin = true;
    state.isLoading = true;
    console.log(`456`);
  },
  handIsLogin(state, bool) {
    state.isLogin = bool;
  },
  LoadingOver(state , bool) {
    state.isLoading = bool;
  },
  HandToken(state) {
    console.log("ok");
  }
};
