<script>
export default {
  name: 'Async',
  async asyncData(context){
    let data = "";
    console.log(context.app.store.state.idx);
    data = context.app.store.state.idx;
    return{
      data
    }
  },
  data(){
    return{ }
  },
};
</script>
<template>
  <div>
    <h2>This is an async</h2>
    <p>拿到Vuex: {{ data }}</p>
  </div>
</template>
<style lang='scss' scoped>
</style>
