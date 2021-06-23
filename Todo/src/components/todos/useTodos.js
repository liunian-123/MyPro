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