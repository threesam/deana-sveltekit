<script>
  let value, isSubmitted = false

  function handleSubmit() {
    console.log('the email is: ' + value)
    isSubmitted = true
    setTimeout(() => isSubmitted = false, 5000)
  }
</script>

<section>
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      {#if isSubmitted}
         <span class="thanks">Thank You!</span>
      {:else}
      <h2>Stay in the Loop</h2>
      <p>Ex sit aliquip enim ea sunt labore consectetur veniam incididunt. Ea irure adipisicing aute elit ad. Ea occaecat esse do fugiat. Cillum dolor commodo in laborum deserunt sit. Minim in pariatur consequat laborum ipsum occaecat.</p>
      <label for="email"><span>email</span>
        <input bind:value name="email" type="email" placeholder="enter email address"/><button type="submit">subscribe</button>
      </label>
      {/if}
    </div>
  </form>
</section>

<style>
  section {
    height: 66vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--headerBackground);
  }

  form {
    max-width: 40rem;
    height: 50%;
    display: flex;
  }
  input {
    width: 70%;
    height: 3rem;
  }
  div {
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  h2 {
    margin: 0;
  }
  p {
    font-size: var(--smallText);
  }
  button {
    display: inline-block;
    height: 3rem;
    width: 30%;
    background-color: var(--red);
    color: var(--white);
  }
  button:focus-visible {
    border-radius: 0;
  }
  input, button {
    line-height: unset;
  }
  input {
    padding-left: 1rem;
  }
  label {
    display: flex;
    position: relative;
  }
  label span {
    position: absolute;
    color: transparent;
    margin-top: -1rem;
  }
  img {
    width: unset;
    max-height: 100%;
    padding-right: 1.5rem;
  }
  .thanks {
    margin: auto;
    font-size: var(--h2);
  }
</style>