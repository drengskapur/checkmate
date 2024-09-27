import { marked } from 'marked';
import DOMPurify from 'dompurify';

export function parseMarkdown(markdown: string): string[] {
  const tokens = marked.lexer(markdown);
  return tokens
    .filter(token => token.type === 'list_item')
    .map(token => DOMPurify.sanitize((token as marked.Tokens.ListItem).text));
}
