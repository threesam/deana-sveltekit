<script>
  export let text, image, alt, color

  import PortableText from '@portabletext/svelte'
  import Quote from './Quote.svelte'
</script>

<section style="background: var(--{color});">
  <div class="text-block">
    <PortableText blocks={text} serializers={{
      types: {
        quote: Quote
      }
    }} />
  </div>
  <img src={image} {alt} />
</section>

<style>
  section {
    position: relative;
    padding: 4rem 0;
  }
	img {
		position: absolute;
		top: 0;
		left: 0;
		object-fit: cover;
		width: 100%;
		height: 100%;
    overflow: hidden;
    opacity: 0.1;
	}
</style>