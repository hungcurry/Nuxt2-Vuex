<script>
export default {
  name: "TestBtn",
  data(){
    return { 
      // 如果這邊取不到token,就會進入錯誤catch 階段 然後轉頁面登出
      token : this.$cookies.get("auth")?.token,
    }
  },
  methods: {
    handTokenTest() {
      console.log(this.token);
      this.$store.dispatch("Login/HandToken", { token: this.token });
    }
  }
};
</script>
<template>
  <div class="outer">
    <button @click="handTokenTest">TEST-token</button>
  </div>
</template>

<style lang="scss" scoped>
.outer  {
  padding: 50px;
}
.outer button {
  margin: auto;
  display: block;
}
</style>
