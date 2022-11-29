<script>
export default {
  data(){
    return{
      dataIdx : 0,
    }
  },
  async fetch(){
    console.log(this.$store.state.idx);
    this.dataIdx = this.$store.state.idx;
  },
};
</script>
<template>
  <div>
    <h2>This is an children</h2>
    <p>子元件拿到Vuex: {{ dataIdx }}</p>
  </div>
</template>



