<section>
  {#if show}
  <div in:fly={{y: -30, duration: 1000}} class="border card">
    <h1>Contact</h1>
    <SocialLinks />
  </div>
  {/if}
</section>

<script>
  import {onMount} from 'svelte'
  import {fly} from 'svelte/transition'
  import SocialLinks from '$lib/components/SocialLinks.svelte'
  let show = false
  onMount(() => show = true)
</script>



<style>
  section {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(var(--tan), var(--lightBlue));
    min-height: calc(100vh - var(--headerHeight));
  }
  h1 {
    color: var(--textColor);
    /* margin: 0 0 2rem 0; */
    width: max-content;
  }
  .border {
    padding: 2rem;
    margin: 1rem;
    position: relative;
    z-index: 10;
  }
  .card {
  padding: 2em;
  box-shadow: var(--level-3);
  border-radius: var(--borderRadius);
}

/* first item will never have a margin top */
.card > *:first-child {
  margin-top: 0;
}

/* last child in card will never have margin bottom */
.card > *:last-child {
  margin-bottom: 0;
}
</style>