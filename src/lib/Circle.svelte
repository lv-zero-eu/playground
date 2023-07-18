<script>
  import { onDestroy, onMount } from "svelte";
  import Circle from "./progress/Circle.svelte";
  import Pie from "./progress/Pie.svelte";

  let progress = 0;
  let antiProgress = 100;
  let progressStatus = false;
  let interval;

  onMount(() => {
    interval = setInterval(() => {
      progress += !progressStatus ? 10 : -10;
      antiProgress += !progressStatus ? -10 : +10;
      progressStatus =
        progress >= 100 || progress <= 0 ? !progressStatus : progressStatus;
    }, 1000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<Circle
  {progress}
  size={150}
  strokeWidth={5}
  color="red"
  foregroundColor="green"
  showProgress={true}
  title="yes"
/>
<Circle
  progress={antiProgress}
  size={150}
  strokeWidth={5}
  color="red"
  foregroundColor="green"
  showProgress={true}
  title="yes"
/>
<Circle
  {progress}
  size={250}
  strokeWidth={8}
  color="red"
  foregroundColor="green"
  showProgress={true}
  title="yes"
  inverted={true}
/>
<Pie
  progress={antiProgress}
  size={250}
  color="red"
  showProgress={true}
  title="yes"
/>
