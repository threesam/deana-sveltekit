<script context="module">
  import client from '$lib/integrations/sanity/client'
  export async function load(ctx) {
    const posts = /* groq */ `*[_type == 'post']{
      title,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      "alt": image.alt,
      body,
      "author": author->name
    }`

    const data = await client.fetch(posts)
    return {
      props: { 
        data
      }
    }
  }
</script>

<script>
  export let data
</script>

<h1>Posts</h1>

<ul>
  {#each data as post}
  <li>
    <!-- <pre>{JSON.stringify(post, null, 2)}</pre> -->
    <a href="/blog/{post.slug}">{post.title}</a>
  </li>
  {:else}
  <li>no posts</li>
  {/each}
</ul>
 