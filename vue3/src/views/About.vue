<template>
  <div class="about">

  </div>
</template>
<script>
import { watch } from 'vue'
export default {
  props: {
    name: String
  },
  setup (props, context) {
    console.log(context, '上下文')
    watch(() => props.name, (newName, oldName) => {
      console.log(newName, oldName)
      context.emit('name-changed')
      // 相当于this.$emit()
    }
    )
  }
}
</script>
