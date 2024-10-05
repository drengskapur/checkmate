import { showChecklistView } from './viewManager.js'
import { showCurrentItem, currentItemIndex } from './carouselManager.js'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

export let checklists = []
export let currentChecklistIndex = 0

export function loadChecklists () {
  if (typeof chrome !== 'undefined' && chrome.storage) {
    chrome.storage.sync.get('checklists', (data) => {
      if (data.checklists) {
        checklists = data.checklists
        renderChecklistList()
      }
    })
  } else {
    const storedChecklists = window.localStorage.getItem('checklists')
    if (storedChecklists) {
      checklists = JSON.parse(storedChecklists)
      renderChecklistList()
    }
  }
}

function saveChecklists () {
  if (typeof chrome !== 'undefined' && chrome.storage) {
    chrome.storage.sync.set({ checklists })
  } else {
    window.localStorage.setItem('checklists', JSON.stringify(checklists))
  }
}

export function addChecklist (filename, content) {
  const todos = parseMarkdown(content)
  checklists.push({ filename, todos })
  saveChecklists()
  renderChecklistList()
}

export function renderChecklistList () {
  const listElement = document.getElementById('checklist-list')
  if (!listElement) return // Add this check to prevent errors if the element doesn't exist

  listElement.innerHTML = checklists
    .map(
      (checklist, index) => `
        <div class="checklist-item">
          <span class="filename">${escapeHtml(checklist.filename)}</span>
          <button class="edit-btn" data-index="${index}" aria-label="Edit"><i class="fas fa-edit"></i></button>
          <button class="delete-btn" data-index="${index}" aria-label="Delete"><i class="fas fa-trash"></i></button>
          <button class="view-btn" data-index="${index}" aria-label="View"><i class="fas fa-eye"></i></button>
        </div>
      `
    )
    .join('')

  // Event delegation
  listElement.addEventListener('click', (event) => {
    const target = event.target.closest('button')
    if (!target) return
    const index = target.getAttribute('data-index')
    if (target.classList.contains('edit-btn')) {
      editFilename(index)
    } else if (target.classList.contains('delete-btn')) {
      deleteChecklist(index)
    } else if (target.classList.contains('view-btn')) {
      viewChecklist(index)
    }
  })
}

function escapeHtml (unsafe) {
  return unsafe.replace(
    /[&<>"']/g,
    (m) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      })[m] || m
  )
}

function editFilename (index) {
  const newFilename = window.prompt(
    'Enter new filename:',
    checklists[index].filename
  )
  if (newFilename) {
    checklists[index].filename = newFilename
    saveChecklists()
    renderChecklistList()
  }
}

function deleteChecklist (index) {
  if (window.confirm('Are you sure you want to delete this checklist?')) {
    checklists.splice(index, 1)
    saveChecklists()
    renderChecklistList()
  }
}

function viewChecklist (index) {
  currentChecklistIndex = index
  document.getElementById('upload-section').style.display = 'none'
  document.getElementById('manage-section').style.display = 'none'
  document.getElementById('view-section').style.display = 'block'
  const titleElement = document.getElementById('current-checklist-title')
  if (titleElement) {
    titleElement.textContent = checklists[index].filename
  }
  showChecklistView()
}

function parseMarkdown (content) {
  const html = marked.parse(content)
  const sanitizedHtml = DOMPurify.sanitize(html)
  const tempElement = document.createElement('div')
  tempElement.innerHTML = sanitizedHtml
  const listItems = tempElement.querySelectorAll('li')
  return Array.from(listItems).map((item) => {
    const checkbox = item.querySelector('input[type="checkbox"]')
    const completed = checkbox ? checkbox.checked : false
    return {
      text: item.textContent.trim(),
      completed
    }
  })
}

export function renderChecklist () {
  const checklistView = document.getElementById('checklist-view')
  if (!checklistView) return // Add this check to prevent errors if the element doesn't exist

  const todos = checklists[currentChecklistIndex].todos
  checklistView.innerHTML = todos
    .map(
      (todo, index) => `
        <div class="todo-item">
          <input type="checkbox" id="todo-${index}" ${todo.completed ? 'checked' : ''} data-index="${index}">
          <label for="todo-${index}">${escapeHtml(todo.text)}</label>
        </div>
      `
    )
    .join('')

  // Event delegation
  checklistView.addEventListener('change', (event) => {
    if (event.target.matches('input[type="checkbox"]')) {
      const index = event.target.getAttribute('data-index')
      toggleTodo(index)
    }
  })
}

export function toggleTodo (index) {
  const todo = checklists[currentChecklistIndex].todos[index]
  todo.completed = !todo.completed
  saveChecklists()
  renderChecklist()
}

export function toggleCurrentTodo () {
  const index = currentItemIndex
  const todo = checklists[currentChecklistIndex].todos[index]
  todo.completed = !todo.completed
  saveChecklists()
  showCurrentItem()
}
