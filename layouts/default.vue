<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  },
};
</script>
<template>
  <div>
    <Header />
    <Nuxt keep-alive/>
    <Footer />
  </div>
</template>
<style lang='scss'>
* {
  outline: 1px solid red;
  margin: 0;
  padding: 0;
}
</style>


