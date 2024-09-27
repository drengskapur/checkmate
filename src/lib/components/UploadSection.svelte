<script lang="ts">
  import { checklistStore } from '$lib/stores/checklistStore';
  import { parseMarkdown } from '$lib/utils/markdown';
  import { createEventDispatcher } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  const dispatch = createEventDispatcher();
  let files: FileList;
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

<div
  class="card bg-base-200 p-6"
  on:dragenter={() => dragOver = true}
  on:dragleave={() => dragOver = false}
  on:dragover|preventDefault
  on:drop|preventDefault={handleDrop}
>
  <h2 class="card-title mb-4">Upload Checklist Templates</h2>
  <div
    class="border-4 border-dashed border-primary rounded-lg p-8 text-center transition-colors"
    class:bg-primary={dragOver}
    class:bg-opacity-10={dragOver}
  >
    <p class="mb-4">Drag & drop Markdown files here or</p>
    <input
      type="file"
      id="file-input"
      accept=".md,text/markdown"
      bind:files
      on:change={() => files && handleFileUpload(files)}
      class="hidden"
      multiple
    />
    <label for="file-input" class="btn btn-primary">Choose Files</label>
  </div>
  {#if uploadSuccess}
    <div in:fly={{ y: 20, duration: 300 }} out:fade class="mt-4 text-center text-success">
      Upload successful!
    </div>
  {/if}
</div>
