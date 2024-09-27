import { addChecklist } from './checklistManager.js'

export function handleFileSelect (event) {
  const files = event.target.files
  processFiles(files)
}

export function handleDragOver (event) {
  event.stopPropagation()
  event.preventDefault()
  event.dataTransfer.dropEffect = 'copy'
}

export function handleDrop (event) {
  event.stopPropagation()
  event.preventDefault()
  const files = event.dataTransfer.files
  processFiles(files)
}

function processFiles (files) {
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    if (file.type === 'text/markdown' || file.name.endsWith('.md')) {
      const reader = new FileReader()
      reader.onload = function (e) {
        const content = e.target.result
        addChecklist(file.name, content)
      }
      reader.readAsText(file)
    } else {
      console.warn(`File ${file.name} is not a Markdown file and was skipped.`)
    }
  }
}
