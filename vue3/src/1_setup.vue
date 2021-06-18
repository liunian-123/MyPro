<template>
  <div class="app">

  </div>
</template>

<script>
export default {
  setup() {
    // composition api 的入口
    //不能访问this
    console.log('setup')
    console.log(this)
    return {}
  },
  beforeCreate() {
    console.log('beforeCreate')
  }
}
</script>

<style lang="scss" scoped>
</style>