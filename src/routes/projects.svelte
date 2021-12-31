<section>
  <div class="banner">
    <h1>Projects</h1>
  </div>
  <article>
    <div class="image">image</div>
    <div class="text">
      <h2>Project Title</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id distinctio deleniti omnis asperiores aspernatur porro perferendis cum saepe quia enim qui, iste adipisci eveniet aperiam soluta dolores iure consequuntur?</p>
    </div>
  </article>
  <article>
    <div class="image">image</div>
    <div class="text">
      <h2>Project Title</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id distinctio deleniti omnis asperiores aspernatur porro perferendis cum saepe quia enim qui, iste adipisci eveniet aperiam soluta dolores iure consequuntur?</p>
    </div>
  </article>
  <article>
    <div class="image">image</div>
    <div class="text">
      <h2>Project Title</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id distinctio deleniti omnis asperiores aspernatur porro perferendis cum saepe quia enim qui, iste adipisci eveniet aperiam soluta dolores iure consequuntur?</p>
    </div>
  </article>
  <article>
    <div class="image">image</div>
    <div class="text">
      <h2>Project Title</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id distinctio deleniti omnis asperiores aspernatur porro perferendis cum saepe quia enim qui, iste adipisci eveniet aperiam soluta dolores iure consequuntur?</p>
    </div>
  </article>
  <article>
    <div class="image">image</div>
    <div class="text">
      <h2>Project Title</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id distinctio deleniti omnis asperiores aspernatur porro perferendis cum saepe quia enim qui, iste adipisci eveniet aperiam soluta dolores iure consequuntur?</p>
    </div>
  </article>
</section>

<style>
  article {
    display: flex;
    width: 100%;
    height: 600px;
  }
  article:nth-child(even) {
    flex-direction: row-reverse;
  }

  div {
    display: grid;
    place-content: center;
  }

  .banner {
    height: 300px;
    background: var(--headerBackground);
  }

  .image {
    width: 50%;
    background: linear-gradient(45deg, var(--tan), var(--red));
  }
  .text {
    width: 50%;
    padding: 2rem;
  }
</style>