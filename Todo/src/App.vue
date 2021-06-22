<template>
  <div class="app">
    <Todos></Todos>
  </div>
</template>

<script>
import Todos from './components/todos/Todos.vue'

export default {
  name: 'App',
  components: {
    Todos
  }
}
</script>
