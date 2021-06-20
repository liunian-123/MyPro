<template>
  <div class="hello">
    <p>{{counter}}</p>
    <p>{{doubleCounter}}</p>
    <p ref="desc"></p>
  </div>
</template>

<script>
import { reactive, computed, onMounted, onUnmounted, ref, toRefs, watch } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    const { counter, doubleCounter } = useCounter()
    const msg = ref('some message')
    // 使用元素的引用
    const desc = ref(null)
    watch(
      counter,
      (value, oldValue) => {
        const p = desc.value
        p.textContent = `counter change from ${oldValue} to ${value}`
      }
    )
    return { counter, doubleCounter, msg, desc }
  }
}

function useCounter () {
  const data = reactive({
    counter: 1,
    doubleCounter: computed(() => data.counter * 2)
  })
  let timer

  onMounted(() => {
    timer = setInterval(() => {
      data.counter++
    }, 1000)
  })
  onUnmounted(() => {
    clearInterval(timer)
  })
  return toRefs(data)
}
</script>
