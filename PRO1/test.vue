<template>
<div id="app">
    <p>页面载入时，input 元素自动获取焦点：</p>
    <input v-focus>
</div>
</template>

<script>
const app = {
   data() {
      return {
      }
   },
   directives: {
      focus: {
         // 指令的定义
         mounted(el) {
            el.focus()
         }
      }
   }
}
 
Vue.createApp(app).mount('#app')
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
