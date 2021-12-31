<script>
  // import Quote from '$lib/components/Quote.svelte'
</script>

<footer>
  <p>Untitled ©2021-{new Date().getFullYear()} | site by <a href="https://threesam.com">Sam</a></p>
</footer>

<style>
  footer {
    min-height: 5rem;
    display: grid;
    place-content: center;
    /* background-color: var(--headerBackground); */
    color: var(--headerTextColor)
  }

  p {
    text-align: center;
    max-width: 40rem;
  }
</style>