let checklists = [];
let currentChecklistIndex = 0;

export function loadChecklists() {
  chrome.storage.sync.get('checklists', function(data) {
    if (data.checklists) {
      checklists = data.checklists;
      renderChecklistList();
    }
  });
}

export function addChecklist(filename, content) {
  const todos = parseMarkdown(content);
  checklists.push({ filename, todos });
  saveChecklists();
  renderChecklistList();
}

export function renderChecklistList() {
  const listElement = document.getElementById('checklist-list');
  listElement.innerHTML = checklists.map((checklist, index) => `
    <div class="checklist-item">
      <span class="filename">${escapeHtml(checklist.filename)}</span>
      <button class="edit-btn" onclick="editFilename(${index})"><i class="fas fa-edit"></i></button>
      <button class="delete-btn" onclick="deleteChecklist(${index})"><i class="fas fa-trash"></i></button>
      <button class="view-btn" onclick="viewChecklist(${index})"><i class="fas fa-eye"></i></button>
    </div>
  `).join('');
}

export function editFilename(index) {
  const newFilename = prompt("Enter new filename:", checklists[index].filename);
  if (newFilename) {
    checklists[index].filename = newFilename;
    saveChecklists();
    renderChecklistList();
  }
}

export function deleteChecklist(index) {
  if (confirm("Are you sure you want to delete this checklist?")) {
    checklists.splice(index, 1);
    saveChecklists();
    renderChecklistList();
  }
}

export function viewChecklist(index) {
  currentChecklistIndex = index;
  document.getElementById('upload-section').style.display = 'none';
  document.getElementById('manage-section').style.display = 'none';
  document.getElementById('view-section').style.display = 'block';
  document.getElementById('current-checklist-title').textContent = checklists[index].filename;
  showChecklistView();
}

function parseMarkdown(content) {
  return content.split('\n')
    .filter(line => line.trim().startsWith('- [ ]') || line.trim().startsWith('- [x]'))
    .map(line => ({
      text: line.replace(/^- \[(x| )\] /, '').trim(),
      completed: line.trim().startsWith('- [x]')
    }));
}

function saveChecklists() {
  chrome.storage.sync.set({ checklists: checklists });
}

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
