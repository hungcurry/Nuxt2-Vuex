<script>
export default {
  name: 'lan',
  data(){
    return {
    }
  },
  methods:{

  },
  mounted(){

  }
};
</script>
<template>
  <div>
    <!-- 子路由 -->
    <div class="router">
      <NuxtLink class="btn" :to="localePath('/Lan/pageA')">{{ $t("page") }}</NuxtLink>
      <NuxtLink class="btn" :to="localePath('/Lan/pageB')">{{ $t("page1") }}</NuxtLink>
      <!-- 第二個參數意思 切換頁面 並換成那個語系 -->
      <NuxtLink class="btn" :to="localePath('/Lan/pageC' , 'zh-Hant-Tw')">{{ $t("page2") }}</NuxtLink>
    </div>

    <!-- 語言 -->
    <div class="links">
      <span>轉換語言</span>
      <nuxt-link :to="switchLocalePath('en')">en</nuxt-link>
      <nuxt-link :to="switchLocalePath('fr')">fr</nuxt-link>
      <nuxt-link :to="switchLocalePath('es')">es</nuxt-link>
      <nuxt-link :to="switchLocalePath('zh-Hant-Tw')">zh-Hant-Tw</nuxt-link>
    </div>

    <!-- 子路由頁面 -->
    <NuxtChild />

  </div>
</template>
<style lang="scss" scoped>
.links a{
  font-size: 24px;
  margin-left: 20px;
  color:aqua;
}
.router {
  margin-bottom: 20px;
}
.router .btn {
  font-size: 24px;
  margin-left: 20px;
  color:red;
  padding: 20px 10px;
  display: inline-block;
}
</style>
