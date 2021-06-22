<template>
  <li :class="{
      completed:todo.completed, 
      editing: todo === editedTodo}">

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
    <EditTodo
      class="edit"
      v-model:todo-title="todo.title"
      v-todo-focus="todo === editedTodo"
      @keyup.enter="addTodo"
      autofocus
      placeholder="新增今日待办"
      autocomplete="off"
    ></EditTodo>
  </li>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    editedTodo: Object
  },
  emits: ['remove-todo', 'update:edited-todo'],
  setup (props, {emit}) {
    const state = reactive({
      beforeEditCache: '',
    })
    function editTodo (todo) {
      state.beforeEditCache = todo.title
      emit('update:edited-todo', todo)
    }
    function cancelEdit (todo) {
      state.title = todo.beforeEditCache
      emit('update:edited-todo', null)

    }
    function doneEdit (todo) {
      emit('update:edited-todo', null)

    }
    function removeTodo (todo) {
      emit('remove-todo', todo)
    }

    return {
      ...toRefs(state),
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
</style>