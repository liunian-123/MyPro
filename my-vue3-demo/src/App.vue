<template>
 <div id="hello-vue" class="demo">
  {{ message }}
</div>
</template>
<script>
const HelloVueApp = {
  data() {
    return {
      message: 'Hello Vue!!'
    }
  }
}
​
Vue.createApp(HelloVueApp).mount('#hello-vue')
</script>