<script lang="ts">
  import Tree from "./lib/Tree.svelte";
  import NotificationView from "./lib/notification/NotificationView.svelte";
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
  <Tree />
  <NotificationView />
  <Circle
    {progress}
    size={50}
    strokeWidth={5}
    color="green"
    foregroundColor="red"
    showProgress={true}
  />
</main>

<style>
</style>
