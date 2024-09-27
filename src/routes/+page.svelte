<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Navigation from '$lib/components/Navigation.svelte';
  import UploadSection from '$lib/components/UploadSection.svelte';
  import ManageSection from '$lib/components/ManageSection.svelte';
  import ViewSection from '$lib/components/ViewSection.svelte';
  import { currentSection } from '$lib/stores/navigationStore';
  import { fade } from 'svelte/transition';
</script>

<div class="container mx-auto p-4 max-w-xl">
  <Header />
  <Navigation />

  {#key $currentSection}
    <div in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
      {#if $currentSection === 'upload'}
        <UploadSection />
      {:else if $currentSection === 'manage'}
        <ManageSection />
      {:else if $currentSection === 'view'}
        <ViewSection />
      {/if}
    </div>
  {/key}
</div>
