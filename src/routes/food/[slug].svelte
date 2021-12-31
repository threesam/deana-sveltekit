<script context="module">
  import client from '$lib/integrations/sanity/client'
  export async function load(ctx) {
    const {slug} = ctx.page.params
    console.log(slug)
    const query = /* groq */ `*[_type == 'recipe' && slug.current == '${slug}'][0]{
      ...,
      title,
      description,
      "slug": slug.current,
      "ingredients": ingredients[]{amount, name, unit},
      instructions,
      "image": image.asset->url,
      "alt": image.alt,
    }`
    const data = await client.fetch(query)
    return {
      props: { data }
    }
  }
</script>

<script>
import Banner from "$lib/components/Banner.svelte";
import PortableText from "@portabletext/svelte";

  export let data
  console.log('data', data);
</script>

<Banner title={data.title} image={data.image} alt={data.alt} />
<section>
  <div>
    <h2>Ingredients</h2>
    <ul>
      {#each data.ingredients as {amount, name, unit}}
        <li>
          {amount} {unit} | {name}
        </li>
      {/each}
    </ul>
  </div>
</section>
<section>
  <h2>Instructions</h2>
  <PortableText blocks={data.instructions} />
</section>
<section>
  <h3>Other recipes</h3>
  <div class="other-recipes">
    <div class="recipe">
      <h3>Image</h3>
      <div class="badge">featured</div>
    </div>
    <div class="recipe">
      <h3>cover image</h3>
      <div class="badge">featured</div>
    </div>
    <div class="recipe">
      <h3>cover image</h3>
      <div class="badge">featured</div>
    </div>
  </div>
</section>


<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->
<style>
  section {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(var(--green), var(--darkBlue));
    min-height: calc(100vh - var(--headerHeight));
  }
  .other-recipes {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    height: 600px;
  }
  @media (max-width: 500px) {
    .other-recipes {
      grid-template-columns: 1fr;
    }
  }

  .recipe {
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