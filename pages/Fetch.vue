<script>
import Children from "../components/Children.vue";
export default {
  name: "Fetch",
  components: {
    Children
  },
  data(){
    return {
      dataIdx : 0,
    }
  },
  async fetch(){
    console.log(this);
    console.log(this.$store.state.idx);
    this.dataIdx = this.$store.state.idx;
  },
};
</script>
<template>
  <div>
    <h2>This is an Fetch</h2>
    <p>父層拿到Vuex: {{ dataIdx }}</p>

    <!-- 子層方法一樣 -->
    <Children/> 
  </div>
</template>
<style lang="scss" scoped>
</style>



