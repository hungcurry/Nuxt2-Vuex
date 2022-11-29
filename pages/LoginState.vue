<script>
import TestBtn from "../components/TestBtn.vue";
export default {
  name: "LoginState",
  components: {
    TestBtn,
  },
  data(){
    return { }
  },
  computed: {
  },
  // 如果啟用 <Nuxt keep-alive/> 就要換成這個生命週期
  deactivated(){
    console.log(`銷毀`);
    this.$store.commit('Login/LoadingOver' , false );
  },
};
</script>
<template>
  <div>
    <p>後台頁面登入中</p>
    <TestBtn />
  </div>
</template>

<style lang="scss" scoped>
p{
  text-align: center;
  font-size: 25px;
  color: red;
  padding: 50px;
}
</style>
