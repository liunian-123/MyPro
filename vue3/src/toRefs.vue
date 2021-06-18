<template>
  <div class="app">
    <div>{{money}}</div>
    <div>{{car.brand}}----{{car.price}}</div>
    <div>{{name}}</div>
    <button @click="money++">修改</button>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup () {
    // torRefs 函数接受一个简单类型,返回一个响应式的对象
    // /////////////////////////////////////////////
    // const money = ref(100)
    // const car = reactive({
    //   brand: '宝马',
    //   price: 1000
    // })
    // const name = ref('lcc')
    // ////////////////////////////////////////////////
    const state = reactive({
      money: 100,
      car: {
        brand: '宝马',
        price: 1000
      },
      name: 'lichangchang'
    })
    return {
      // money,
      // car,
      // name
      // state   只返回state  在模板中使用时需要 state./// 这种形式使用
      // ///////////////////////////////////////////////////////////////
      // ...state
      // ...state  解析后  car 依旧时响应式对象可以通过button改变  但是name 和 money 都丢失了其响应式  因此用到toRefs
      // ///////////////////////////////////////////////
      ...toRefs(state)
    }
  }
}
</script>

<style  scoped>
.app{
  background-color: rebeccapurple;
}
</style>
