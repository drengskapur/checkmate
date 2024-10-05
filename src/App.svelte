<script lang="ts">
  import Header from "./components/Header.svelte";
  import Navigation from "./components/Navigation.svelte";
  import UploadSection from "./components/UploadSection.svelte";
  import ManageSection from "./components/ManageSection.svelte";
  import ViewSection from "./components/ViewSection.svelte";
  import { currentSection } from "./stores/navigationStore";
</script>

<div class="container mx-auto px-4 py-8">
  <Header />
  <Navigation />

  {#if $currentSection === "upload"}
    <UploadSection />
  {:else if $currentSection === "manage"}
    <ManageSection />
  {:else if $currentSection === "view"}
    <ViewSection />
  {/if}
</div>
