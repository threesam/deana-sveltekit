<script context="module">
  import client from '$lib/integrations/sanity/client'
  export async function load(ctx) {
    const recipes = /* groq */ `*[_type == 'recipe']{
      title,
      description,
      "slug": slug.current,
      "ingredients": ingredients[]{amount, name, unit},
      "image": image.asset->url,
      "alt": image.alt,
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
  export let data
  console.log('data', data);
</script>

<h1>Recipes</h1>

<ul>
  {#each data as recipe}
  <li>
    <a href="/food/{recipe.slug}">{recipe.title}</a>
  </li>
  {:else}
  <li>no recipes</li>
  {/each}
</ul>
 