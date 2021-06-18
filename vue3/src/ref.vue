<template>
  <div class="app">
    <div>{{money}}</div>
    <button @click="money++">修改</button>
  </div>
</template>

<script>
import { ref } from 'vue'
// reactive 函数接受一个普通对象，返回该普通对象的响应式对象
export default {
  setup () {
    // ref 函数接受一个简单类型,返回一个响应式的对象
    // 响应式对象只有一个属性value
    // 在模板中使用ref 会自动调用value
    const money = ref(100)
    // money++   显示NAN  因为 money被ref转换成了一个对象  对象不能++
    money.value++
    return {
      money
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  }
}
</script>

<style  scoped>
.app{
  background-color: rebeccapurple;
}
</style>
