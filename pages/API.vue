<script>
export default {
  name: 'API',
  data(){
    return{ }
  },
  mounted() {
    this.$store.dispatch("Fetch/handInit");
  },
  // 將原本Nuxt裡的$notify 注入到Vuex裡面
  // 必須在 created 裡面執行 等實體創立完畢
  created(){
    // console.log(this.$notify);
    this.$store.$notify = this.$notify
  },
};
</script>
<template>
  <div>
    <notifications group="foo" />
  </div>
</template>
<style lang='scss' scoped>
</style>
