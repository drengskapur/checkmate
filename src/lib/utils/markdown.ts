import { marked } from "marked";
import DOMPurify from 'dompurify';
import { v4 as uuidv4 } from "uuid";

interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
}

export function parseMarkdown(content: string): ChecklistItem[] {
  const html = marked.parse(content);
  const sanitizedHtml = DOMPurify.sanitize(html);
  const tempElement = document.createElement("div");
  tempElement.innerHTML = sanitizedHtml;

  const listItems = tempElement.querySelectorAll("li");

  return Array.from(listItems).map((item): ChecklistItem => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    const checked = checkbox?.hasAttribute("checked") ?? false;
    return {
      id: uuidv4(),
      text: item.textContent?.trim() ?? "",
      checked,
    };
  });
}

export function renderTodoText(text: string): string {
  // Convert markdown links to HTML
  text = text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_, title, url) => `<a href="${url}" target="_blank">${title}</a>`
  );

  // Convert markdown images to HTML
  text = text.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    (_, alt, src) => `<img src="${src}" alt="${alt}">`
  );

  return text;
}
