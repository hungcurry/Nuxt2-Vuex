// state
export const state = () => ({
  idx : 0,
  total : 0,
})
// getters
export const getters = {
  total (state){
    return state.total;
  }
}
// actions
export const actions = {
  handAddCount({ commit , state } , payload){
    commit("AddCountState" , payload);
  }
}
// mutations
export const mutations = {
  AddCountState(state , payload){
    const number = (state.idx++) + 1
    console.log(number);
    state.total = number + payload;
  }
}
