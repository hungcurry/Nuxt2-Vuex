<script>
export default {
  name: "Module",
  data(){
    return {

    }
  },
  computed:{
    // 原本：
    getIdx(){
      return this.$store.getters.total;
    },
    // Module(資料夾)
    UserIdx(){
      return this.$store.getters["User/age"];
    },
    BooksIdx(){
      return this.$store.getters["Books/age"];
    },
  },
  mounted(){
    console.log(this.$store);

    // 原本：
    this.$store.dispatch('handAddCount' , 10) // 可以再傳參數

    // Module(資料夾)
    // User / index.js
    console.log( "User=>" ,this.$store.state.User.name);
    this.$store.dispatch('User/handUserLog') 

    // Books / state.js 和 actions.js
    console.log("Books=>" ,this.$store.state.Books.name);
    this.$store.dispatch('Books/handBooks') 
  }
};
</script>
<template>
  <div>
    <p>原本index: {{ getIdx }}</p>
    <p>User資料夾 / index: {{ UserIdx }}</p>
    <p>Books資料夾 / getters: {{ BooksIdx }}</p>
  </div>
</template>
<style lang="scss" scoped>
</style>
