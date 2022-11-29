// state
export const state = () => ({
  name: "Use白爛貓",
  age: 25
});
// actions
export const actions = {
  handUserLog() {
    console.log("User data");
  }
};
// mutations
export const mutations = {};
// getters
export const getters = {
  age (state){
    return state.age;
  }
};
