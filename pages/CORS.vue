<script>
import axios from "axios"
export default {
  name: "cors",
  data(){
    return { }
  },
  methods:{
    handClick(){
      // http://www.vscinemas.com.tw/VsWeb/api/GetLstDicCinema  (電影院列表)
      axios.get("/VsWeb/api/GetLstDicCinema")
      .then((res)=>{
        console.log(res);
      })
    }
  },
};
</script>
<template>
  <div>
    <button @click="handClick">CORS APi</button>
  </div>
</template>

<style lang="scss" scoped>
  button {
    display: block;
    font-size: 32px;
    margin: 50px auto;

  }
</style>
