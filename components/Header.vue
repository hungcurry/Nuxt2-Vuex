<script>
export default {
  data(){
    return {
      isOpen: false,
    }
  },
  methods:{
    HandMenuOpen(){
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
<template>
  <header :class="{ openMenu: isOpen }">
    <nav>
      <NuxtLink class="Title" to="/">index</NuxtLink>
      <a id="moblie_menu" @click="HandMenuOpen" href="javascript:;"></a>
      <div>
        <NuxtLink to="/vuex">vuex</NuxtLink>
        <NuxtLink to="/async">async</NuxtLink>
        <NuxtLink to="/fetch">fetch</NuxtLink>
        <NuxtLink to="/api">api管理</NuxtLink>
        <NuxtLink to="/plugins">plugins</NuxtLink>
        <NuxtLink to="/module">module</NuxtLink>
        <NuxtLink to="/nuxtAxios">nuxtAxios</NuxtLink>

        <NuxtLink to="/lan">多國語系</NuxtLink>
        <NuxtLink to="/LoginView">會員登入</NuxtLink>
        <NuxtLink to="/cors">CORS</NuxtLink>
      </div>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
h6 {
  color: greenyellow;
  font-size: 40px;
}
header {
  background-color: #373c3f;
  width: 100%;
  // height: 97px;
  @media screen and (max-width: 640px) {
    transition: height 0.2s;
    height: 37px;
    overflow: hidden;
    &.openMenu {
      height: 232px;
    }
  }
  > nav {
    position: relative;
    width: 1024px;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    @media screen and (max-width: 1044px) {
      width: 100%;
    }
    @media screen and (max-width: 640px) {
      width: 100%;
      height: 232px;
    }
    > .Title {
      line-height: 97px;
      font-size: 18px;
      float: left;
      color: #fff;
      margin-right: 20px;
      @media screen and (max-width: 1044px) {
        margin-left: 5%;
      }
      @media screen and (max-width: 640px) {
        line-height: 37px;
      }
    }
    > div {
      width: 100%;
      height: 100%;
      @media screen and (max-width: 640px) {
        clear: both;
        width: 100%;
        height: 195px;
      }
      > a {
        display: block;
        line-height: 97px;
        font-size: 12px;
        float: left;
        color: #fff;
        padding: 0 10px;
        @media screen and (max-width: 640px) {
          width: 100%;
          height: auto;
          overflow: hidden;
          line-height: 37px;
          text-align: center;
        }
      }
    }
  }
}
a#moblie_menu {
  display: none;
  @media screen and (max-width: 640px) {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 37px;
    height: 37px;
    background-image: url("~@/assets/images/menu.jpg");
    background-position: 50% 50%;
    background-size: 95% auto;
    background-repeat: no-repeat;
  }
}
</style>
