<template>
  <div class="about">
    我是子组件----{{propContent}}
  </div>
</template>
<script>
// import { watchEffect } from 'vue'
import { watch } from 'vue'
export default {
  props: {
    name: String
  },
  setup (props) {
    let propContent
    // watchEffect(() => {
    //   propContent = props.name
    // })
    watch(
      () => { propContent = props.name }
    )
    return {
      propContent
    }
  }
}
</script>
