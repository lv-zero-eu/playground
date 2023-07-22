<script>
  import Date from "./input/Date.svelte";
  import Number from "./input/Number.svelte";
  import Switch from "./input/Switch.svelte";
</script>

<main>
  <Switch />
  <Number />
  <Date />
</main>

<style>
  main {
    border: 0.5px solid red;
    width: fit-content;
    padding: 0.5px;
  }
</style>
