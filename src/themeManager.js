export function initTheme() {
  const isDarkMode = window.localStorage.getItem('darkMode') === 'true'
  const body = document.body
  const themeIcon = document.querySelector('#theme-toggle i')

  if (isDarkMode) {
    body.classList.add('dark-mode')
    themeIcon.classList.remove('fa-moon')
    themeIcon.classList.add('fa-sun')
  }
}

export function toggleTheme() {
  const body = document.body
  const themeIcon = document.querySelector('#theme-toggle i')

  body.classList.toggle('dark-mode')
  themeIcon.classList.toggle('fa-moon')
  themeIcon.classList.toggle('fa-sun')

  const isDarkMode = body.classList.contains('dark-mode')
  window.localStorage.setItem('darkMode', isDarkMode)
}
