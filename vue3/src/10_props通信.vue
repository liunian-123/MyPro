<template>
  <div class="home">
    <div>我是父组件</div>
    <!-- setup函数接收props作为其第一个参数，props对象是响应式的(单向的父—>子),
    watchEffect或watch会观察和响应props的更新。不要对props对象进行解构，那样会失去响应性。
    在开发过程中，props对象对用户空间代码时不可变的，用户尝试修改props时会触发警告。-->
    <About :name="sendData" />
  </div>
</template>
<script>
import { ref } from 'vue'
import About from './About'
export default {
  components: {
    About
  },
  setup () {
    const sendData = ref('这世界很酷')
    return {
      sendData
    }
  }
}
</script>
