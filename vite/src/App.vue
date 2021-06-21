<template>
  <div class="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
    <!-- toeleport -->
    <ModelButton></ModelButton>
    <Emit @click="onClick"></Emit>
    <!-- v-model 的使用 -->
    <VmodelTest v-model="counter"></VmodelTest>
    <!-- v-model:counter="counter"   :counter="counter" @update:counter = counter=$event -->
    <!-- render api 变化 -->
    <RenderTest v-model:counter="counter"></RenderTest>
    <!-- 函数式组件 -->
    <Functional level="3">这是一个动态h元素</Functional>
    <!-- 异步组件 -->
    <AsyncComp></AsyncComp>
    <Transitiontest></Transitiontest>
  </div>
</template>

<script>
import { h, defineAsyncComponent } from 'vue'
import ModelButton from './components/ModelButton.vue'
import HelloWorld from './components/HelloWorld.vue'
import Emit from './components/Emit.vue'
import VmodelTest from './components/VmodelTest.vue'
import Functional from './components/Functional.vue'
import Transition from './components/Transition.vue'
import Transitiontest from './components/Transitiontest.vue'
export default {
  name: 'App',
  data () {
    return {
      counter: 1
    }
  },
  components: {
    HelloWorld,
    ModelButton,
    Emit,
    VmodelTest,
    Functional,
    RenderTest: {
      props: {
        counter: {
          type: Number,
          default: 0
        },
      },
      render () {
        return h('div', [
          h('div', { onClick: this.onClick }, `I am RenserTest:${this.counter}`)
        ])
      },
      methods: {
        onClick () {
          this.$emit('update:counter', this.counter + 1)
        }
      }
    },
    AsyncComp: defineAsyncComponent(() => import('./components/NextPage.vue')),
    Transitiontest
  },
  methods: {
    onClick () {
      console.log("click on app")
    }
  }
}
</script>
