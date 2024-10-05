import {
  showUploadSection,
  showManageSection,
  showChecklistView,
  showCarouselView
} from './viewManager.js'
import {
  handleFileSelect,
  handleDragOver,
  handleDrop
} from './fileHandlers.js'
import { showPreviousItem, showNextItem } from './carouselManager.js'
import { toggleTheme, initTheme } from './themeManager.js'
import { loadChecklists } from './checklistManager.js'

document.addEventListener('DOMContentLoaded', () => {
  // Cache DOM elements
  const uploadBtn = document.getElementById('upload-btn')
  const manageBtn = document.getElementById('manage-btn')
  const fileInput = document.getElementById('file-input')
  const dropZone = document.getElementById('drop-zone')
  const themeToggle = document.getElementById('theme-toggle')
  const main = document.querySelector('main')

  // Event Listeners
  uploadBtn.addEventListener('click', showUploadSection)
  manageBtn.addEventListener('click', showManageSection)
  fileInput.addEventListener('change', handleFileSelect)
  dropZone.addEventListener('dragover', handleDragOver)
  dropZone.addEventListener('drop', handleDrop)
  themeToggle.addEventListener('click', toggleTheme)

  main.addEventListener('click', (event) => {
    if (event.target.matches('#checklist-view-btn')) {
      showChecklistView()
    } else if (event.target.matches('#carousel-view-btn')) {
      showCarouselView()
    } else if (event.target.matches('#prev-btn')) {
      showPreviousItem()
    } else if (event.target.matches('#next-btn')) {
      showNextItem()
    }
  })

  // Load checklists on startup
  loadChecklists()

  // Initialize theme
  initTheme()
})
