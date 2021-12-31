<script context="module">
  import client from '$lib/integrations/sanity/client'
  export async function load(ctx) {
    const {slug} = ctx.params
    const query = /* groq */ `*[_type == 'post' && slug.current == '${slug}'][0]{
      title,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      "alt": image.alt,
      publishedAt,
      body,
      "author": author->name,
    }`
    const data = await client.fetch(query)
    return {
      props: { data }
    }
  }
</script>

<script>
import { format, parseISO } from 'date-fns'
import Banner from "$lib/components/Banner.svelte";
import PortableText from "@portabletext/svelte";

  export let data
</script>

<Banner title={data.title} image={data.image} alt={data.alt} />
<section>
  <h2>{format(parseISO(data.publishedAt), 'MM/dd/yyyy')} - {data.author}</h2>
  <PortableText blocks={data.body} />
</section>
<section>
  <h3>Other Posts</h3>
  <div class="other-posts">
    <div class="post">
      <h3>Image</h3>
      <div class="badge">featured</div>
    </div>
    <div class="post">
      <h3>cover image</h3>
      <div class="badge">featured</div>
    </div>
    <div class="post">
      <h3>cover image</h3>
      <div class="badge">featured</div>
    </div>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(var(--green), var(--darkBlue));
    min-height: calc(100vh - var(--headerHeight));
  }
  .other-posts {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    height: 600px;
  }
  @media (max-width: 500px) {
    .other-posts {
      grid-template-columns: 1fr;
    }
  }

  .post {
    background: linear-gradient(45deg, var(--tan), var(--green), var(--darkBlue));
    position: relative;
    height: 100%;
    display: grid;
    place-content: center;
  }

  .badge {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.25rem 0.5rem;
    font-size: small;
    background: var(--black);
    color: var(--white);
  }
</style>