import { marked } from "marked";
import type { Tokens } from "marked";
import * as DOMPurify from "dompurify";
import { v4 as uuidv4 } from "uuid";

interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
}

export function parseMarkdown(content: string): ChecklistItem[] {
  const tokens = marked.lexer(content, { gfm: true, breaks: true });
  const checklistItems: ChecklistItem[] = [];

  let inList = false;
  for (const token of tokens) {
    if (token.type === "list_start") {
      inList = true;
    } else if (token.type === "list_end") {
      inList = false;
    } else if (inList && token.type === "list_item") {
      const checked = token.task && token.checked;
      const text = token.text.replace(/^\[[ x]\]\s*/, "").trim();
      checklistItems.push({
        id: uuidv4(),
        text: DOMPurify.sanitize(text),
        checked: !!checked,
      });
    }
  }

  return checklistItems;
}

export function renderTodoText(text: string): string {
  const renderer = new marked.Renderer();

  renderer.link = (href, title, linkText) => {
    const safeHref = DOMPurify.sanitize(href);
    const safeTitle = title ? ` title="${DOMPurify.sanitize(title)}"` : "";
    const safeLinkText = DOMPurify.sanitize(linkText);
    return `<a href="${safeHref}"${safeTitle} target="_blank" rel="noopener noreferrer">${safeLinkText}</a>`;
  };

  renderer.image = (src, title, alt) => {
    const safeSrc = DOMPurify.sanitize(src);
    const safeAlt = DOMPurify.sanitize(alt);
    const safeTitle = title ? ` title="${DOMPurify.sanitize(title)}"` : "";
    return `<img src="${safeSrc}" alt="${safeAlt}"${safeTitle} style="max-width: 100%; height: auto;">`;
  };

  return DOMPurify.sanitize(marked(text, { renderer }));
}
