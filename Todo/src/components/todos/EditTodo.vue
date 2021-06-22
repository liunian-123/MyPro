<template>
  <input
    type="text"
    :value="todoTitle"
    @input="onInputChange"
    v-bind="$attrs"
  />
  <!-- 多处复用 在 main.js 中 进行全局组件注册-->
</template>
<script>

export default {
  props: {
    todoTitle: {
      type: String,
      default: ''
    },
  },
  methods: {
      onInputChange(e){
          this.$emit('update:todoTitle', e.target.value)
      }
  },
}
</script>

<style  scoped>
</style>