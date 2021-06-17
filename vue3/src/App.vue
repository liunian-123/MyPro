<template>
  <div class="app">
    <div>{{car.brand}}---{{car.price}}</div>
    <button @click="car.brand = '奔驰'">修改</button>
  </div>
</template>

<script>
import { reactive } from 'vue'
// reactive 函数接受一个普通对象，返回该普通对象的响应式对象
export default {
  setup () {
    // setup 需要返回值 只有返回值才能在模板中使用
    const car = reactive({ // eslint-disable-line no-unused-vars
      brand: '宝马',
      price: 1000
    })
    return {
      car
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
