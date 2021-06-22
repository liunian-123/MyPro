<template>
  <div>
    <!-- 新增todo -->
    <!--
      autofocus 属性规定当页面加载时 <input> 元素应该自动获得焦点。 
      autocomplete 属性规定输入字段是否应该启用自动完成功能。
      自动完成允许浏览器预测对字段的输入。当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项。
    -->
    <input
      type="text"
      v-model="newTodo"
      @keyup.enter="addTodo"
      autofocus
      placeholder="新增今日待办"
      autocomplete="off"
    />

    <!-- todo 列表 -->
    <ul>
      <li
        v-for="todo in filterdTodos"
        :key="todo.id"
        :class="{completed:todo.completed, editing: todo === editedTodo}"
      >

        <!-- 绑定完成状态 -->
        <div class="view">
          <input
            type="checkbox"
            v-model="todo.completed"
          >
          <!-- @dbclick 监听双击事件 -->
          <label @dblclick="editTodo(todo)">{{todo.title}}</label>
          <button @click="removeTodo(todo)">x</button>
        </div>

        <!-- 编辑待办 -->
        <!-- @blur 当元素失去焦点时所触发的事件 -->
        <!--  v-todo-focus 时自定义指令 通过directives 进行声明-->
        <input
          type="text"
          class="edit"
          v-model="todo.title"
          v-todo-focus="todo === editedTodo"
          @blur="doneEdit(todo)"
          @keyup.enter="doneEdit(todo)"
          @keyup.escape="cancelEdit(todo)"
        >
      </li>
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
const filters = {
  all (todos) { return todos },
  active (todos) { return todos.filter(todo => !todo.completed) },
  completed (todos) { return todos.filter(todo => todo.completed) }
}

// 缓存操作
const todoStorage = {
  fetch () {
    let todos = JSON.parse(localStorage.getItem('vue3-todos')||'[]')
    todos.forEach((todo,index) => {
      todo.id = index + 1
    });
    return todos
  },
  save(todos){
    localStorage.setItem("vue3-todos",JSON.stringify(todos))
  }
}

export default {
  setup () {
    const state = reactive({
      newTodo: '',
      todos: todoStorage.fetch(),
      beforeEditCache: '',
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
    function editTodo (todo) {
      state.beforeEditCache = todo.title
      state.editedTodo = todo
    }
    function cancelEdit (todo) {
      state.title = todo.beforeEditCache
      state.editedTodo = null
    }
    function doneEdit (todo) {
      state.editedTodo = null
    }

    watchEffect(() => {
      todoStorage.save(state.todos)
      
    })
    return {
      ...toRefs(state),
      addTodo,
      removeTodo,
      editTodo,
      cancelEdit,
      doneEdit
    }
  },
  directives: {
    "todo-focus": (el, { value }) => {
      if (value) {
        el.focus();
      }
    }
  }
}
</script>

<style  scoped>
.completed label {
  /* 删除线 */
  text-decoration: line-through;
}
.edit,
.editing .view {
  display: none;
}
.view,
.editing .edit {
  display: block;
}
.filters > span {
  padding: 2px 4px;
  margin-right: 4px;
  border: 1px solid transparent;
}
.filters > span.selected {
  background-color: rgba(173, 47, 47, 0.2);
}
</style>