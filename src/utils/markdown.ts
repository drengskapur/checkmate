import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { v4 as uuidv4 } from 'uuid';

interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
}

export function parseMarkdown(content: string): ChecklistItem[] {
  const checklistItems: ChecklistItem[] = [];

  const tokens = marked.lexer(content, { gfm: true, breaks: true });

  function processTokens(tokens: marked.Token[]) {
    for (const token of tokens) {
      if (token.type === 'list') {
        const listToken = token as marked.Tokens.List;
        // Process each list item
        processTokens(listToken.items as marked.Token[]);
      } else if (token.type === 'list_item') {
        const listItem = token as marked.Tokens.ListItem;
        if (listItem.task) {
          const text = DOMPurify.sanitize(listItem.text);
          const checked = !!listItem.checked;
          checklistItems.push({
            id: uuidv4(),
            text,
            checked,
          });
        }

        // Process nested tokens if any (e.g., sublists)
        if (listItem.tokens && listItem.tokens.length > 0) {
          processTokens(listItem.tokens as marked.Token[]);
        }
      } else if (hasTokens(token)) {
        if (token.tokens && token.tokens.length > 0) {
          processTokens(token.tokens);
        }
      }
    }
  }

  // Type guard to check if a token has 'tokens' property
  function hasTokens(
    token: marked.Token,
  ): token is marked.Token & { tokens: marked.Token[] } {
    return 'tokens' in token && Array.isArray((token as any).tokens);
  }

  processTokens(tokens);

  return checklistItems;
}

export function renderTodoText(text: string): string {
  const renderer = new marked.Renderer();

  renderer.link = (href: string, title: string | null, text: string) => {
    const safeHref = DOMPurify.sanitize(href);
    const safeTitle = title ? ` title="${DOMPurify.sanitize(title)}"` : '';
    return `<a href="${safeHref}"${safeTitle} target="_blank" rel="noopener noreferrer">${text}</a>`;
  };

  renderer.image = (href: string, title: string | null, text: string) => {
    const safeSrc = DOMPurify.sanitize(href);
    const safeAlt = text ? DOMPurify.sanitize(text) : '';
    const safeTitle = title ? ` title="${DOMPurify.sanitize(title)}"` : '';
    return `<img src="${safeSrc}" alt="${safeAlt}"${safeTitle} style="max-width: 100%; height: auto;">`;
  };

  const parsedText = marked.parseInline(text, { renderer });
  return DOMPurify.sanitize(parsedText);
}
