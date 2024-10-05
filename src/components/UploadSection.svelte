<script lang="ts">
  import { checklistStore } from "../stores/checklistStore";
  import { parseMarkdown } from "../utils/markdown";
  import { debounce } from "../utils/helpers";
  import {
    provideFluentDesignSystem,
    fluentButton,
    fluentCard,
  } from "@fluentui/web-components";

  provideFluentDesignSystem().register(fluentButton(), fluentCard());

  let files: FileList | null = null;
  let dragOver = false;
  let uploadSuccess = false;

  const showUploadSuccess = debounce((): void => {
    uploadSuccess = true;
    setTimeout(() => (uploadSuccess = false), 3000);
  }, 300);

  async function handleFileUpload(uploadedFiles: FileList): Promise<void> {
    for (let file of Array.from(uploadedFiles)) {
      if (file.type !== "text/markdown" && !file.name.endsWith(".md")) {
        console.warn(`${file.name} is not a Markdown file.`);
        continue;
      }
      try {
        const text = await file.text();
        const items = parseMarkdown(text);
        checklistStore.addTemplate(file.name, items);
        showUploadSuccess();
      } catch (error: unknown) {
        console.error(`Error processing file ${file.name}:`, error);
        // TODO: Add user-friendly error message
      }
    }
    files = null;
  }

  function handleDrop(event: DragEvent): void {
    event.preventDefault();
    dragOver = false;
    if (event.dataTransfer?.files) {
      handleFileUpload(event.dataTransfer.files);
    }
  }
</script>

<!-- Rest of your component HTML remains unchanged -->
