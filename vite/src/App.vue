<template>
<div class="app">
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
 <!-- toeleport -->
  <ModelButton></ModelButton>
</div>
</template>

<script>
import ModelButton from './components/ModelButton.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ModelButton
  }
}
</script>
