<script>
  export let show = false;
</script>

<button
  on:mouseenter={() => (show = true)}
  on:mouseleave={() => (show = false)}
  on:click={() => (show = !show)}
>
  <header>
    <slot name="header" />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
      ><path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="48"
        d="M112 184l144 144 144-144"
      /></svg
    >
  </header>
  {#if show}
    <div class="body">
      <slot name="body" class="body" />
    </div>
  {/if}
</button>

<style>
  button {
    background-color: inherit;
    color: inherit;
    font-size: inherit;
    border: inherit;
    cursor: pointer;
    text-align: inherit;
    position: relative;
    padding: 0;
  }
  button:hover svg{
    rotate: 180deg;
  }
  header {
    display: flex;
    align-items: center;
    gap: 2px;
  }
  svg {
    height: 14px;
    aspect-ratio: 1/1;
    display: block;
    transition: 0.2s;
  }
  .body {
    width: max-content;
    position: absolute;
    padding-top: 8px;
  }
  .body > :global(*) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
</style>
