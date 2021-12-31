<script>
  export let title, image, alt
</script>

<section>
  <div class="description">
    <h1>lowercase pamphlet series</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias illum ipsum mollitia odit vero nulla earum doloremque doloribus ex? Nulla nemo explicabo culpa pariatur. Ipsa quis ad quasi repudiandae!</p>
  </div>
</section>

<style>
  section {
    display: flex;
    width: 100%;
  }
  .description {
    width: 400px;
  }
  .product {
    max-width: 400px;
    height: 600px;
    display: grid;
    place-content: center;
    position: relative;
    padding: 0.5rem;
    filter: grayscale(100%);
  }
  .product:hover {
    transition: all 0.3s ease-in;
    filter: grayscale(0);
  }

  .badge {
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--background);
    padding: 0.5rem;
  }

  h1 {
    font-size: var(--h3);
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: -10;
  }
</style>