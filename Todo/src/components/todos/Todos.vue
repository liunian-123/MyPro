<template>
  <div>
    <!-- 新增todo -->
    <!--
      autofocus 属性规定当页面加载时 <input> 元素应该自动获得焦点。 
      autocomplete 属性规定输入字段是否应该启用自动完成功能。
      自动完成允许浏览器预测对字段的输入。当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项。
    -->
    <EditTodo
      v-model:todo-title="newTodo"
      @keyup.enter="addTodo"
      autofocus
      placeholder="新增今日待办"
      autocomplete="off"
    ></EditTodo>
    <!-- <input
      type="text"
      v-model="newTodo"
      @keyup.enter="addTodo"
      autofocus
      placeholder="新增今日待办"
      autocomplete="off"
    /> -->

    <!-- todo 列表 -->
    <ul>
      <Item
        v-for="todo in filterdTodos"
        :key="todo.id"
        :todo="todo"
        v-model:edited-todo="editedTodo"
        @remove-todo="removeTodo"
      >
      </Item>
    </ul>

    <!-- 过滤 已完成 未完成 -->
    <p class="filters">
      <span
        @click="visibility = 'all'"
        :class="{selected: visibility === 'all'}"
      >ALL</span>
      <span
        @click="visibility = 'active'"
        :class="{selected: visibility === 'active'}"
      >Active</span>
      <span
        @click="visibility = 'completed'"
        :class="{selected: visibility === 'completed'}"
      >Completed</span>
    </p>
  </div>
</template>

<script>
import { reactive, toRefs, computed, watchEffect } from 'vue'
// import Item from './Item.vue'
const filters = {
  all (todos) { return todos },
  active (todos) { return todos.filter(todo => !todo.completed) },
  completed (todos) { return todos.filter(todo => todo.completed) }
}

// 缓存操作
const todoStorage = {
  fetch () {
    let todos = JSON.parse(localStorage.getItem('vue3-todos') || '[]')
    todos.forEach((todo, index) => {
      todo.id = index + 1
    });
    return todos
  },
  save (todos) {
    localStorage.setItem("vue3-todos", JSON.stringify(todos))
  }
}

export default {
  // component:{
  //   Item
  // },
  setup () {
    const state = reactive({
      newTodo: '',
      todos: todoStorage.fetch(),
      editedTodo: null, //正在编辑的todo
      visibility: 'all',
      filterdTodos: computed(() => {
        return filters[state.visibility](state.todos)
      })
    })
    function addTodo () {
      state.todos.push({
        id: state.todos.length + 1,
        title: state.newTodo,
        completed: false
      })
      state.newTodo = ''
    }
    function removeTodo (todo) {
      state.todos.splice(state.todos.indexOf(todo), 1)
    }
    watchEffect(() => {
      todoStorage.save(state.todos)

    })
    return {
      ...toRefs(state),
      addTodo,
      removeTodo
    }
  },

}
</script>

<style  scoped>

.filters > span {
  padding: 2px 4px;
  margin-right: 4px;
  border: 1px solid transparent;
}
.filters > span.selected {
  background-color: rgba(173, 47, 47, 0.2);
}
</style>