<script lang="ts">
  import { checklistStore } from '$lib/stores/checklistStore';
  import { parseMarkdown } from '$lib/utils/markdown';
  import { provideFluentDesignSystem, fluentButton, fluentCard } from '@fluentui/web-components';
  import { debounce } from '$lib/utils/helpers';

  provideFluentDesignSystem().register(fluentButton(), fluentCard());

  let files: FileList | null = null;
  let dragOver = false;
  let uploadSuccess = false;

  const showUploadSuccess = debounce(() => {
    uploadSuccess = true;
    setTimeout(() => (uploadSuccess = false), 3000);
  }, 300);

  async function handleFileUpload(uploadedFiles: FileList) {
    for (let file of Array.from(uploadedFiles)) {
      if (file.type !== 'text/markdown' && !file.name.endsWith('.md')) {
        console.warn(`${file.name} is not a Markdown file.`);
        continue;
      }
      try {
        const text = await file.text();
        const items = parseMarkdown(text);
        checklistStore.addTemplate(file.name, items);
        showUploadSuccess();
      } catch (error) {
        console.error(`Error processing file ${file.name}:`, error);
        // TODO: Add user-friendly error message
      }
    }
    files = null;
  }

  function handleDrop(event: DragEvent) {
    event.preventDefault();
    dragOver = false;
    if (event.dataTransfer?.files) {
      handleFileUpload(event.dataTransfer.files);
    }
  }
</script>

<fluent-card
  class="p-8 text-center"
  class:dragover={dragOver}
  on:dragenter={() => (dragOver = true)}
  on:dragleave={() => (dragOver = false)}
  on:dragover|preventDefault
  on:drop|preventDefault={handleDrop}
  role="region"
  aria-label="Upload area for checklist templates"
>
  <h2 class="text-2xl mb-4">Upload Checklist Templates</h2>
  <p class="mb-4">Drag & drop Markdown files here or</p>
  <input
    type="file"
    id="file-input"
    accept=".md,text/markdown"
    multiple
    bind:files
    on:change={() => files && handleFileUpload(files)}
    class="hidden"
    aria-label="File input for uploading checklist templates"
  />
  <label for="file-input">
    <fluent-button role="button" appearance="accent">Choose Files</fluent-button>
  </label>
  {#if uploadSuccess}
    <p class="text-green-500 mt-4" role="status">Upload successful!</p>
  {/if}
</fluent-card>

<style>
  .dragover {
    border-width: 2px;
    border-style: dashed;
    border-color: var(--primary-color);
  }
</style>
