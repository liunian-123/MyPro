<template>
  <div>
    <!-- 新增todo -->
    <input
      type="text"
      v-model="newTodo"
      @keyup.enter="addTodo"
      autofocus
      placeholder="新增今日待办"
      autocomplete="off"
    />
    <!--
      autofocus 属性规定当页面加载时 <input> 元素应该自动获得焦点。 
      autocomplete 属性规定输入字段是否应该启用自动完成功能。
      自动完成允许浏览器预测对字段的输入。当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项。
    -->
    <!-- todo 列表 -->
    <ul>
      <li v-for="todo in todos" :key="todo.id"
      :class="{completed:todo.completed}">
        <!-- 绑定完成状态 -->
        <input type="checkbox" v-model="todo.completed" >
        <label>{{todo.title}}</label>
        <button @click="removeTodo(todo)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup () {
    const state = reactive({
      newTodo: '',
      todos: []
    })
    function addTodo(){
      state.todos.push({
        id: state.todos.length +1,
        title: state.newTodo,
        complete:false
      })
      state.newTodo = ''
    }
    function removeTodo(todo){
      state.todos.splice(state.todos.indexOf(todo),1)
    }
    return {
      ...toRefs(state),
      addTodo,
      removeTodo
    }
  }
}
</script>

<style  scoped>
.completed label{
  text-decoration: line-through;
}
</style>