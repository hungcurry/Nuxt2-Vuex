<script>
export default {};
</script>
<template>
  <footer>
    <div>
      <h4>curry footer</h4>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100%;
  background-color: #ebebeb;
  @media screen and (max-width: 640px) {
    width: 100%;
    height: auto;
    overflow: hidden;
    background-color: #ebebeb;
  }
  > div {
    width: 1024px;
    height: 100%;
    margin: 0 auto;
    @media screen and (max-width: 1044px) {
      width: 100%;
    }
  }
}
h4 {
    color: #088ca5;
    font-size: 30px;
    padding: 20px 50px;
  }
</style>
