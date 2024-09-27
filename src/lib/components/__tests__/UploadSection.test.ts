import { render, fireEvent } from '@testing-library/svelte';
import UploadSection from '../UploadSection.svelte';

describe('UploadSection', () => {
  it('renders correctly', () => {
    const { getByText } = render(UploadSection);
    expect(getByText('Upload Checklist Templates')).toBeInTheDocument();
    expect(getByText('Drag & drop Markdown files here or')).toBeInTheDocument();
    expect(getByText('Choose Files')).toBeInTheDocument();
  });

  it('handles file upload', async () => {
    const { getByLabelText } = render(UploadSection);
    const input = getByLabelText('Choose Files');

    const file = new File(['# Test Checklist\n- [ ] Item 1\n- [ ] Item 2'], 'test.md', { type: 'text/markdown' });
    await fireEvent.change(input, { target: { files: [file] } });

    // Add assertions here to check if the file was processed correctly
  });
});
