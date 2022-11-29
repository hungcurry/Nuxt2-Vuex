<script>
export default {
  name: "Plugins",
  asyncData(context){
    // 從Nuxt context就可以找到 $DemoTest
    // console.log(context);
    context.$DemoTest.log("asyncData :麻糬")
    return{  }
  },
  data(){
    return {
      num : this.$DemoTest.add(5 , 10),
    }
  },
  mounted(){
    // 從Vue實體內容就可以找到 $DemoTest
    // console.log(this);
    this.$DemoTest.log("Vue :白爛貓");
  }
};
</script>
<template>
  <div>{{ num }}</div>
</template>
<style lang="scss" scoped>
</style>
