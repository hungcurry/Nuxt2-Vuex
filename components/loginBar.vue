<script>
export default {
  name: "loginBar",
  methods: {
  },
};
</script>
<template>
  <div>
    <div class="loading">
      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.load {
  width: 40px;
}
.box {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: transparent;
  transform: scale(0.3);
}
.loading div {
  position: absolute;
  width: 120px;
  height: 120px;
  border: 20px solid #42b983;
  border-top-color: transparent;
  border-radius: 50%;
}
.loading div {
  animation: loading 0.6s linear infinite;
  top: 100px;
  left: 100px
}
.loading {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; 
}
.loading div { box-sizing: content-box; }
@keyframes loading {
  0% { transform: translate(-50%,-50%) rotate(0deg); }
  100% { transform: translate(-50%,-50%) rotate(360deg); }
}
</style>
