<script>
  import Date from "./input/Date.svelte";
  import Number from "./input/Number.svelte";
  import Switch from "./input/Switch.svelte";
</script>

<main>
  <Date
    bg={"var(--bg)"}
    bgButton={"var(--bg-box)"}
    bgSelected={"var(--bg-box)"}
  />
  <Switch />
  <Number />
</main>

<style>
  main {
    border: 0.5px solid red;
    width: fit-content;
    padding: 0.5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
</style>
