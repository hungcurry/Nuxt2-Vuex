<script>
export default {
  props: ["error"],
  layout: "blog" // you can set a custom layout for the error page
};
</script>

<template>
  <div class="error">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">回到首頁page</NuxtLink>
  </div>
</template>
<style lang='scss' scoped>
.error {
  text-align: center;
}
</style>
