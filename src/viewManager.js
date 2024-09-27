export function showUploadSection () {
  document.getElementById('upload-section').style.display = 'block'
  document.getElementById('manage-section').style.display = 'none'
  document.getElementById('view-section').style.display = 'none'
}

export function showManageSection () {
  document.getElementById('upload-section').style.display = 'none'
  document.getElementById('manage-section').style.display = 'block'
  document.getElementById('view-section').style.display = 'none'
  renderChecklistList()
}

export function showChecklistView () {
  document.getElementById('checklist-view').style.display = 'block'
  document.getElementById('carousel-view').style.display = 'none'
  document.getElementById('checklist-view-btn').classList.add('active')
  document.getElementById('carousel-view-btn').classList.remove('active')
  renderChecklist()
}

export function showCarouselView () {
  document.getElementById('checklist-view').style.display = 'none'
  document.getElementById('carousel-view').style.display = 'flex'
  document.getElementById('checklist-view-btn').classList.remove('active')
  document.getElementById('carousel-view-btn').classList.add('active')
  showCurrentItem()
}
