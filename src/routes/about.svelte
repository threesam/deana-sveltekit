<script context="module">
  import client from '$lib/integrations/sanity/client'
  export async function load() {
    const deana = /* groq */  `*[_type == 'author' && slug.current == 'deana'][0]{
      ...
    }`
    const data = await client.fetch(deana)
    return {
      props: { data }
    }
  }
</script>

<script>
	export let data
  import PortableText from '@portabletext/svelte'
</script>

<h1>About {data.name}</h1>

<PortableText blocks={data.bio} />