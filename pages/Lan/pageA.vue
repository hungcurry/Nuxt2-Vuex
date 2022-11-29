<script>
export default {
  data(){
    return {
      useName : "參數A"
    }
  },
};
</script>
<template>
  <div>
    <div class="center">
      <!-- 動態參數 -->
      <h1>{{ $t('welcome' , { name : useName } ) }} : page 123</h1>
      <h2>{{ $t('about') }} </h2>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.center {
  text-align: center;
}
h1 {
  margin-bottom: 10px;
}
</style>


