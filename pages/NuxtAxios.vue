<script>
export default {
  name: "NextAxios",
  async asyncData({ $axios }){
    // 從Nuxt context就可以找到 $axios
    // console.log(context.$axios); 
    // context 可以再解構出來使用 { $axios }

    // 這樣好處就是不需要在寫try / catch 去做錯誤處理 把錯誤集中管理在 plugins / axios.js
    let data = [];
    // 發生錯誤 https://vue-lessons-api.herokuapp.com/photo/list564654646
    const res = await $axios.get("https://vue-lessons-api.herokuapp.com/photo/list564654646s");
    console.log(res.data);
    data = res.data;
    return{ data }
  }
};
</script>
<template>
  <div></div>
</template>
<style lang="scss" scoped>
</style>

