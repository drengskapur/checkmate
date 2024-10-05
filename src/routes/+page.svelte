<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Navigation from '$lib/components/Navigation.svelte';
  import UploadSection from '$lib/components/UploadSection.svelte';
  import ManageSection from '$lib/components/ManageSection.svelte';
  import ViewSection from '$lib/components/ViewSection.svelte';
  import { currentSection } from '$lib/stores/navigationStore';
</script>

<div class="container mx-auto px-4 py-8">
  <Header />
  <Navigation />

  {#if $currentSection === 'upload'}
    <UploadSection />
  {:else if $currentSection === 'manage'}
    <ManageSection />
  {:else if $currentSection === 'view'}
    <ViewSection />
  {/if}
</div>
