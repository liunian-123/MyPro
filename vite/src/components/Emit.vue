<template>
  <div class="Emit">
    <!-- 当自定义事件的名字不是click 可以不用emit -->
    <div @click="$emit('click')">自定义事件</div>
  </div>
</template>
<script>
export default {
 emits: ['click']
}
</script>

<style scoped>
</style>