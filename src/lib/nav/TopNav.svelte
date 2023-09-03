<nav>
  <slot />
</nav>

<style>
  nav {
    display: flex;
    gap: 10px;
    align-items: baseline;
    width: fit-content;
  }

  nav > :global(h1) {
    margin: 0;
  }

  nav > :global(a) {
    text-decoration: none;
    color: inherit;
  }

  nav :global(*) {
    white-space: nowrap;
  }

  @media only screen and (max-width: 600px) {
    :global(body) {
      background-color: lightblue;
    }
    nav {
      display: grid;
    }
  }
</style>
