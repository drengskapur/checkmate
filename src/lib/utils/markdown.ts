import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { v4 as uuidv4 } from 'uuid';

export function parseMarkdown(content: string) {
  const html = marked.parse(content);
  const sanitizedHtml = DOMPurify.sanitize(html);
  const tempElement = document.createElement('div');
  tempElement.innerHTML = sanitizedHtml;
  const listItems = tempElement.querySelectorAll('li');
  return Array.from(listItems).map((item) => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    const checked = checkbox ? checkbox.checked : false;
    return {
      id: uuidv4(),
      text: item.textContent?.trim() || '',
      checked
    };
  });
}

export function renderTodoText(text: string) {
  // Convert markdown links to HTML
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
  // Convert markdown images to HTML
  text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">');
  return text;
}
