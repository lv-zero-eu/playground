<!-- App.svelte -->

<script>
  import LinearChart from "./chart/Linear.svelte";

  const chartData = [
    { data: [50, 80, 120, 500, 60], color: "steelblue" },
    { data: [0, 100, 180, 130, -0], color: "orange" },
  ];

  setInterval(() => {
    chartData[0].data[1] += 1;
    console.log(chartData[0]);
  }, 1000);

  let fillArea = true; // Set to false if you don't want to fill the area
</script>

<main>
  <h1>Multi-Line Chart with Hover</h1>
  <label>
    <input type="checkbox" bind:checked={fillArea} /> Fill Area
  </label>
  <LinearChart {chartData} width={400} height={200} {fillArea} />
</main>
