<template>
  <div class="app">
    <h1>钩子函数-----{{money}}</h1>
    <button @click="money++">按钮</button>
    <Demo></Demo>
  </div>
</template>

<script>
import Demo from './Demo.vue'
import { ref, provide } from 'vue'
export default {
  components: {
    Demo
  },
  setup () {
    // provider inject
    const money = ref(100)
    provide('money', money)
    return {
      money
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
