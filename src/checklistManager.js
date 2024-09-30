import { showChecklistView } from './viewManager.js'
import { showCurrentItem, currentItemIndex } from './carouselManager.js'

import { marked } from 'marked'
import DOMPurify from 'dompurify'

export let checklists = []
export let currentChecklistIndex = 0

export function loadChecklists () {
  if (typeof chrome !== 'undefined' && chrome.storage) {
    chrome.storage.sync.get('checklists', function (data) {
      if (data.checklists) {
        checklists = data.checklists
        renderChecklistList()
      }
    })
  } else {
    const storedChecklists = localStorage.getItem('checklists')
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
    localStorage.setItem('checklists', JSON.stringify(checklists))
  }
}

export function addChecklist (filename, content) {
  const todos = parseMarkdown(content)
  checklists.push({ filename, todos })
  saveChecklists()
  renderChecklistList()
}

function renderChecklistList () {
  const listElement = document.getElementById('checklist-list')
  listElement.innerHTML = checklists
    .map(
      (checklist, index) => `
      <div class="checklist-item">
        <span class="filename">${escapeHtml(checklist.filename)}</span>
        <button class="edit-btn" data-index="${index}"><i class="fas fa-edit"></i></button>
        <button class="delete-btn" data-index="${index}"><i class="fas fa-trash"></i></button>
        <button class="view-btn" data-index="${index}"><i class="fas fa-eye"></i></button>
      </div>
    `
    )
    .join('')

  // Add event listeners
  listElement.querySelectorAll('.edit-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = btn.getAttribute('data-index')
      editFilename(index)
    })
  })

  listElement.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = btn.getAttribute('data-index')
      deleteChecklist(index)
    })
  })

  listElement.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = btn.getAttribute('data-index')
      viewChecklist(index)
    })
  })
}

function escapeHtml (unsafe) {
  return unsafe.replace(/[&<>"']/g, function (m) {
    return (
      {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      }[m] || m
    )
  })
}

function editFilename (index) {
  const newFilename = prompt('Enter new filename:', checklists[index].filename)
  if (newFilename) {
    checklists[index].filename = newFilename
    saveChecklists()
    renderChecklistList()
  }
}

function deleteChecklist (index) {
  if (confirm('Are you sure you want to delete this checklist?')) {
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
  document.getElementById('current-checklist-title').textContent = checklists[index].filename
  showChecklistView()
}

function parseMarkdown (content) {
  const html = marked.parse(content)
  const sanitizedHtml = DOMPurify.sanitize(html)
  const tempElement = document.createElement('div')
  tempElement.innerHTML = sanitizedHtml
  const listItems = tempElement.querySelectorAll('li')
  return Array.from(listItems).map(item => {
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
  const todos = checklists[currentChecklistIndex].todos
  checklistView.innerHTML = todos
    .map(
      (todo, index) => `
      <div class="todo-item">
        <input type="checkbox" id="todo-${index}" ${todo.completed ? 'checked' : ''} data-index="${index}">
        <label for="todo-${index}">${todo.text}</label>
      </div>
    `
    )
    .join('')

  // Add event listeners
  checklistView.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const index = checkbox.getAttribute('data-index')
      toggleTodo(index)
    })
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
