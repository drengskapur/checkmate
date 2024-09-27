let currentItemIndex = 0

export function showPreviousItem () {
  if (currentItemIndex > 0) {
    currentItemIndex--
    showCurrentItem()
  }
}

export function showNextItem () {
  if (currentItemIndex < checklists[currentChecklistIndex].todos.length - 1) {
    currentItemIndex++
    showCurrentItem()
  }
}

export function showCurrentItem () {
  const currentItem = document.getElementById('current-item')
  const todos = checklists[currentChecklistIndex].todos
  if (todos.length > 0) {
    const todo = todos[currentItemIndex]
    currentItem.innerHTML = `
      <div class="todo-item">
        <input type="checkbox" id="todo-current" ${todo.completed ? 'checked' : ''} onchange="toggleCurrentTodo()">
        <label for="todo-current">${renderTodoText(todo.text)}</label>
        <button class="edit-btn" onclick="editCurrentTodoItem()"><i class="fas fa-pencil-alt"></i></button>
      </div>
    `
  } else {
    currentItem.innerHTML = '<p>No items to display</p>'
  }
}

function renderTodoText (text) {
  // Convert markdown links to HTML
  text = text.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2" target="_blank">$1</a>')

  // Convert markdown images to HTML
  text = text.replace(/!\[([^\]]*)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1">')

  return text
}
