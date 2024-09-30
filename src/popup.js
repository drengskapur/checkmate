document.addEventListener('DOMContentLoaded', () => {
  // Cache DOM elements
  const uploadBtn = document.getElementById('upload-btn');
  const manageBtn = document.getElementById('manage-btn');
  const fileInput = document.getElementById('file-input');
  const dropZone = document.getElementById('drop-zone');
  const checklistViewBtn = document.getElementById('checklist-view-btn');
  const carouselViewBtn = document.getElementById('carousel-view-btn');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const themeToggle = document.getElementById('theme-toggle');

  // Event Listeners
  uploadBtn.addEventListener('click', showUploadSection);
  manageBtn.addEventListener('click', showManageSection);
  fileInput.addEventListener('change', handleFileSelect);
  dropZone.addEventListener('dragover', handleDragOver);
  dropZone.addEventListener('drop', handleDrop);
  checklistViewBtn.addEventListener('click', showChecklistView);
  carouselViewBtn.addEventListener('click', showCarouselView);
  prevBtn.addEventListener('click', showPreviousItem);
  nextBtn.addEventListener('click', showNextItem);
  themeToggle.addEventListener('click', toggleTheme);

  // Load checklists on startup
  loadChecklists();

  // Initialize theme
  initTheme();
});
