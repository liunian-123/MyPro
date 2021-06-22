import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import EditTodo from './components/todos/EditTodo.vue'
import Item from './components/todos/Item.vue'

createApp(App)
.component('EditTodo',EditTodo)
.component('Item',Item)
.mount('#app')
