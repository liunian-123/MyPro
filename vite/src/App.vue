<template>
<div class="app">
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
 <!-- toeleport -->
  <ModelButton></ModelButton>
  <Emit @click="onClick"></Emit>
</div>
</template>

<script>
import ModelButton from './components/ModelButton.vue'
import HelloWorld from './components/HelloWorld.vue'
import Emit from './components/Emit.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ModelButton,
    Emit
  },
  methods: {
    onClick(){
      console.log("click on app")
    }
  }
}
</script>
