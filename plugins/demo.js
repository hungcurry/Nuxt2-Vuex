export default ({ app }, inject) => {
  inject("DemoTest", {
    log(val){
      console.log('DemoTest=>' , val);
    },
    add(a , b){
      return a + b
    }
  });
};
