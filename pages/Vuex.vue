<script>
export default {
  name: "vuex",
  async asyncData(){
    return{
    }
  },
  data(){
    return {

    }
  },
  computed:{
    getIdx(){
      return this.$store.getters.total;
    }
  },
  methods:{
    handClick(){
      this.$store.dispatch('handAddCount' , 10) // 可以再傳參數
    }
  },
  mounted(){

  }
};
</script>
<template>
  <div>
    <p>{{ getIdx }}</p>
    <button @click="handClick">增加</button>
  </div>
</template>
<style lang="scss" scoped>

</style>
