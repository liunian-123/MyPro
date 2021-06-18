<template>
  <div class="demo">
    我是Demo组件---{{money}}
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  setup () {
    const money = inject('money')
    return {
      money
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
