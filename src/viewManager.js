// src/viewManager.js

function showUploadSection() {
  document.getElementById('upload-section').style.display = 'block';
  document.getElementById('manage-section').style.display = 'none';
  document.getElementById('view-section').style.display = 'none';
}

function showManageSection() {
  document.getElementById('upload-section').style.display = 'none';
  document.getElementById('manage-section').style.display = 'block';
  document.getElementById('view-section').style.display = 'none';
  renderChecklistList();
}

function showChecklistView() {
  document.getElementById('checklist-view').style.display = 'block';
  document.getElementById('carousel-view').style.display = 'none';
  document.getElementById('checklist-view-btn').classList.add('active');
  document.getElementById('carousel-view-btn').classList.remove('active');
  renderChecklist();
}

function showCarouselView() {
  document.getElementById('checklist-view').style.display = 'none';
  document.getElementById('carousel-view').style.display = 'flex';
  document.getElementById('checklist-view-btn').classList.remove('active');
  document.getElementById('carousel-view-btn').classList.add('active');
  showCurrentItem();
}
