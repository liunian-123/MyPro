<template>
  <div class="app">
    <div>{{money}}</div>
    <div>{{car.brand}}</div>
    <button @click="money++">修改money</button>
    <button @click="car.brand = '劳斯莱斯'">修改car</button>
  </div>
</template>

<script>
import { reactive, toRefs, watch, ref } from 'vue'

export default {
  setup () {
    const state = reactive({
      // money: 100,
      car: {
        brand: '宝马'
      }
    })
    const money = ref(100)
    // watch属性
    // 三个参数
    // 参数一：监视的数据源 可以是个ref
    // 参数二：回调函数 (value,oldValue) => {}
    // 参数三：额外配置 是个对象 {deep：true, immediate:true} 深度监听，立即监听
    // ///////////////////////////////
    // watch(
    //   () => state.money,
    //   (value, oldValue) => {
    //     console.log('money变了', value, oldValue)
    //   }
    // )
    // ///////////////////////////////////////////////////////
    // 当你要监视某个ref对象， const money = ref(100)
    // watch(
    //   money,
    //   (value, oldValue) => {
    //     console.log('money变了', value, oldValue)
    //   }
    // )
    // ///////////////////////////////////////////////////////////
    // watch(
    //   () => state.car,
    //   (value) => {
    //     console.log('car变了', value)
    //     // 没有打印 监视的是个对象修改对象里面的属性不会被监视到  因此要使用deep：true
    //   },
    //   {
    //     deep: true
    //     // immediate: true 页面刷新立即监听 显示为 ‘宝马’
    //   }
    // )
    // /////////////////////////////////////////////////////////////
    // watch 同时监听多个值
    watch([() => state.money, () => state.car],([money,car]) => {
      console.log('数据变化了', money, car)
    })
    return {
      ...toRefs(state),
      money
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
