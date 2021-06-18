<template>
  <div class="app">
    <div>{{money}}</div>
    <div>{{car.brand}}----{{car.price}}</div>
    <button @click="money++">修改</button>
    <button @click="car.price = '2000'">修改</button>
  </div>
</template>

<script>
import { readonly, ref } from 'vue'
export default {
  setup () {
    const money = ref(100)
    const car = readonly({
      brand: '宝马',
      price: 10000
    })
    return {
      money: readonly(money),
      car
    }
  }
}
</script>

<style  scoped>
.app{
  background-color: rebeccapurple;
}
</style>
