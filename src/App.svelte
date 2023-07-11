<script lang="ts">
  import Tree from "./lib/Tree.svelte";
  import Notification from "./lib/Notification.svelte";
  import Circle from "./lib/progress/Circle.svelte";

  let progress = 0;
  let progressStatus = false;

  setInterval(() => {
    progress += !progressStatus ? 10 : -10;
    progressStatus =
      progress >= 100 || progress <= 0 ? !progressStatus : progressStatus;
  }, 1000);
</script>

<main>
  <Notification />
  <Tree />
  <Circle
    {progress}
    size={150}
    strokeWidth={5}
    color="red"
    foregroundColor="green"
    showProgress={true}
    title="yes"
  />
</main>

<style>
</style>
