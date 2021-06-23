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
    <Filter
      :items="filterItems"
      v-model="visibility"
    ></Filter>
  </div>
</template>

<script>
import { reactive, toRefs, computed, watchEffect } from 'vue'
import Filter from './Filter.vue'
// import Item from './Item.vue'
const filters = {
  all (todos) { return todos },
  active (todos) { return todos.filter(todo => !todo.completed) },
  completed (todos) { return todos.filter(todo => todo.completed) }
}

// 缓存操作


export default {
  components: { Filter },
  setup () {
    const state = reactive({
      newTodo: '',
      todos: todoStorage.fetch(),
      editedTodo: null, //正在编辑的todo
      filterItems: [
        { label: 'ALL', value: 'all' },
        { label: 'Active', value: 'active' },
        { label: 'Completed', value: 'completed' }
      ],
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
</style>