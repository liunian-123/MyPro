<template>
  <div class="app">
    <h1 ref="hRef">钩子函数---13</h1>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  setup () {
    // 创建了一个空的ref
    const hRef = ref(null)
    onMounted(() => {
      console.log(hRef.value.innerHTML)
    })
    return {
      hRef
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
