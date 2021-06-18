<template>
  <div class="app">
    <div>我今年的年龄：<input
        type="text"
        v-model="age"
      ></div>
    <div>我明年的年龄：{{nextAge}}</div>
    <div>尝试修改计算属性 <input
        type="text"
        v-model="nextAge"
      ></div>
    <div>我后年的年龄<input
        type="text"
        v-model="nextAge2"
      ></div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  setup () {
    // computed 计算属性使用
    // 传入一个函数 getter 返回一个不允许修改的计算属性
    const age = ref(18)
    const nextAge = computed(() => {
      return parseInt(age.value) + 1
    })
    // 传入一个对象 包括get和set 可以创建一个可以修改的计算属性
    const nextAge2 = computed({
      get () {
        return parseInt(age.value) + 2
      },
      set (value) {
        age.value = value - 2
      }
    })
    return {
      age,
      nextAge,
      nextAge2
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
