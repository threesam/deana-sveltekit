<script>
  export let title, description, image, alt, video, textColor = 'white', size = 'thirds'
</script>

<section class={size}>
  {#if image}
     <!-- content here -->
     <img src={image} {alt}>
  {:else if video}
     <video autoplay loop muted>
      <source src={video} type="video/mp4" />
    </video>
  {:else}
    <p>no content</p>
  {/if}
  <div class:video style="color: var(--{textColor});">
    <h1>{title}</h1>
    {#if description}
    <p>{description}</p>
    {/if}
  </div>
</section>

<style>
  section {
    max-width: 100vw;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(0,0,0,0), black);
  }
  div {
    width: 100%;
    height: 100%;
    padding: 1rem 2rem;
    max-width: unset;
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  h1 {
    margin-bottom: 0;
  }

  p {
    max-width: 20rem;
    text-align: right;
  }
  .full {
    height: calc(100vh - var(--headerHeight));
  }
  .thirds {
    height: calc(66vh);
  }
  .half {
    height: calc(50vh - var(--headerHeight));
  }

	img, video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
    background: var(--black);
    z-index: -10;
	}
  img {
    object-fit: cover;
  }
  video {
    object-fit: cover;
  }
  .video {
    opacity: 0;
  }
</style>