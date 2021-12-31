<script context="module">
  import client from '$lib/integrations/sanity/client'
  export async function load(ctx) {
    const {slug} = ctx.page.params
    console.log(slug)
    const query = /* groq */ `*[_type == 'page' && slug.current == '${slug}'][0]{
      ...
    }`
    const data = await client.fetch(query)
    return {
      props: { data }
    }
  }
</script>

<script>
  export let data
  console.log('data', data);
</script>

<pre>{JSON.stringify(data, null, 2)}</pre>