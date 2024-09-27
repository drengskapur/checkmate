import { parseMarkdown } from '../markdown';

describe('parseMarkdown', () => {
  it('should parse markdown list items', () => {
    const markdown = `
- [ ] Item 1
- [x] Item 2
- [ ] Item 3
    `;
    const result = parseMarkdown(markdown);
    expect(result).toEqual(['Item 1', 'Item 2', 'Item 3']);
  });

  it('should ignore non-list items', () => {
    const markdown = `
# Header
- [ ] Item 1
Some text
- [x] Item 2
    `;
    const result = parseMarkdown(markdown);
    expect(result).toEqual(['Item 1', 'Item 2']);
  });
});
