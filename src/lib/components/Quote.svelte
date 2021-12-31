<script>
  export let text, author, color, portableText
</script>

<section class:portableText>
  <blockquote style="background: var(--{color || portableText.block.color || 'transparent'})">
    <p><em>{text || portableText.block.text || ''}</em></p>
    <span aria-label="authorname">- {author || portableText.block.author || ''}</span>
  </blockquote>
</section>

<style>
  section {
    width: 100%;
    min-height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
  }

  .portableText {
    height: unset;
    padding: 0;
  }
  .portableText blockquote {
    width: 100%;
    margin-bottom: 1rem;
  }

  blockquote {
    position: relative;
    color: white;
    display: grid;
    place-content: center;
    max-width: 50rem;
  }
  
  p {
    font-size: var(--h4);
    font-weight: 400;
  }

  span {
    text-align: right;
    /* font-weight: 400; */
  }
</style>