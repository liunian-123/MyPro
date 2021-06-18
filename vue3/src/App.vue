<template>
  <div>

  </div>
</template>

<script>
import { defineComponent } from 'vue'

const MyComponent = defineComponent({
  data () {
    return { count: 1 }
  },
  methods: {
    increment () {
      this.count++
    }
  }
})

console.log(`MyComponent:${MyComponent}`)
</script>

<style lang="scss" scoped>
</style>
