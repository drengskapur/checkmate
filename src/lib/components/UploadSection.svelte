<script lang="ts">
  import { checklistStore } from '$lib/stores/checklistStore';
  import { parseMarkdown } from '$lib/utils/markdown';
  import { createEventDispatcher } from 'svelte';
  import { onMount } from 'svelte';

  // Import Fluent UI components
  import { provideFluentDesignSystem, fluentButton, fluentCard, fluentTextField } from '@fluentui/web-components';
  provideFluentDesignSystem().register(
    fluentButton(),
    fluentCard(),
    fluentTextField()
  );

  const dispatch = createEventDispatcher();
  let files: FileList | null = null;
  let dragOver = false;
  let uploadSuccess = false;

  async function handleFileUpload(uploadedFiles: FileList) {
    for (let file of uploadedFiles) {
      if (file.type !== 'text/markdown' && !file.name.endsWith('.md')) {
        dispatch('error', { message: `${file.name} is not a Markdown file.` });
        continue;
      }
      const text = await file.text();
      const items = parseMarkdown(text);
      checklistStore.addTemplate(file.name, items);
    }
    files = null;
    uploadSuccess = true;
    setTimeout(() => uploadSuccess = false, 3000);
    dispatch('upload');
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
  @dragenter={() => dragOver = true}
  @dragleave={() => dragOver = false}
  @dragover|preventDefault
  @drop|preventDefault={handleDrop}
  style="padding: 2rem; text-align: center;"
>
  <h2>Upload Checklist Templates</h2>
  <p>Drag & drop Markdown files here or</p>
  <input
    type="file"
    id="file-input"
    accept=".md,text/markdown"
    multiple
    bind:files
    style="display: none;"
    on:change={() => files && handleFileUpload(files)}
  />
  <label for="file-input">
    <fluent-button appearance="accent">Choose Files</fluent-button>
  </label>
  {#if uploadSuccess}
    <p style="color: green;">Upload successful!</p>
  {/if}
</fluent-card>
