<!-- App.svelte -->

<script>
  import { onDestroy, onMount } from "svelte";
  import LinearChart from "./chart/Linear.svelte";

  let chartData = [
    { data: [50, 80, 120, 500, 60], color: "steelblue" },
    { data: [0, 100, 180, 130, -0], color: "orange" },
  ];

  let enableInterval = false;

  let interval;

  onDestroy(() => {
    clearInterval(interval);
  });

  $: {
    if (!interval && enableInterval) {
      interval = setInterval(() => {
        chartData[0].data[0] += 1;
      }, 10);
    } else if (!enableInterval) {
      clearInterval(interval);
      interval = undefined;
    }
  }

  let fillArea = true; // Set to false if you don't want to fill the area
</script>

<main>
  <h1>Multi-Line Chart with Hover</h1>
  <label>
    <input type="checkbox" bind:checked={fillArea} /> Fill Area
  </label>
  <label>
    <input type="checkbox" bind:checked={enableInterval} /> Enable Interval
  </label>
  <br />
  <LinearChart {chartData} width={400} height={200} bind:fillArea />
</main>
