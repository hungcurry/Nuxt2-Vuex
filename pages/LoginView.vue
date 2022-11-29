<script>
import login from "../components/Login.vue";
import loginBar from "../components/loginBar.vue";
export default {
  name: "loginView",
  components: {
    login,
    loginBar
  },
  data(){
    return { }
  },
  computed: {
    isLoading() {
      return this.$store.getters['Login/isLoading'];
    },
  },
  mounted(){
    // 因為如果重新整理 原本isLogin 就會變回false
    // 所以要特別再改寫狀態, 好可以利用 正確的狀態 去做事情 隱藏元素之類的
    if (this.$cookies.get("auth")?.token) {
      this.$store.dispatch("Login/handIsLogin", true);
      this.$router.push({ path : '/LoginState'});
    }
  },
};
</script>
<template>
  <div class="outer">
    <login  />
    <loginBar v-if="isLoading"/>
  </div>
</template>
<style lang="scss" scoped>
.outer {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 60px 0px;
}
</style>
