<script context="module">
  import client from '$lib/integrations/sanity/client'
  export async function load(ctx) {
    console.log('ctx', ctx);
    
    const recipes = /* groq */ `*[_type == 'recipe']{
      title,
      description,
      "slug": slug.current,
      "ingredients": ingredients[]{amount, name, unit},
      "image": image.asset->url,
      "alt": image.alt,
    }`
    // const page = /* groq */ `*[_type == 'page' && slug.current == 'recipes'][0]{
    //   "banner": banner->{
    //     ...,
    //     title,
    //     description,
    //     size,
    //     "image": image.asset->url,
    //     "alt": image.alt,
    //     "video": video.asset->url,
    //     cta{
    //       "color": color[0],
    //       "internalLink": internalLink.reference->{"slug":slug.current, _type}
    //     }
    //   },
    //   "textBlock": textBlock->{
    //     text,
    //     "image": image.asset->url,
    //     "alt": image.alt,
    //     color
    //   }
    // }`
    const query = /* groq */ `{
      "recipes": ${recipes},
    }`
    const data = await client.fetch(recipes)
    return {
      props: { 
        data
      }
    }
  }
</script>

<script>

  // export let page
  export let data
  console.log('data', data);

  // console.log('page', page);
</script>

<h1>Recipes</h1>

<ul>
  {#each data as recipe}
  <li>
    <!-- <pre>{JSON.stringify(recipe, null, 2)}</pre> -->
    <a href="/food/{recipe.slug}">{recipe.title}</a>
  </li>
  {:else}
  <li>no recipes</li>
  {/each}
</ul>
 