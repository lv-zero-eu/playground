<!-- LinearChart.svelte -->

<script>
  export let chartData = []; // Array of objects containing data and colors
  export let width = 400;
  export let height = 200;
  export let fillArea = false;

  // Extract data and colors from the chartData array
  let multiData = chartData.map((item) => item.data);
  let lineColors = chartData.map((item) => item.color || "steelblue");

  let multiDataPath;

  // Calculate the X and Y scales
  let xScale, yScale;

  $: {
    xScale = (d) => (d * width) / (multiData[0].length - 1);

    const minData = Math.min(...multiData.flat());
    const maxData = Math.max(...multiData.flat());
    const dataRange = Math.max(Math.abs(minData), Math.abs(maxData));

    yScale = (d) => height - (d / dataRange) * height;

    multiDataPath = multiData.map((lineData) => ({
      line: generateLinePath(lineData),
      area: fillArea ? generateAreaPath(lineData) : undefined,
    }));
  }

  // Create a function to generate the path for each line
  function generateLinePath(lineData) {
    let path = `M ${xScale(0)} ${yScale(lineData[0])}`;
    for (let i = 1; i < lineData.length; i++) {
      path += ` L ${xScale(i)} ${yScale(lineData[i])}`;
    }
    return path;
  }

  // Create a function to generate the path for the area under the line
  function generateAreaPath(lineData) {
    let path = `M ${xScale(0)} ${height} L ${xScale(0)} ${yScale(lineData[0])}`;
    for (let i = 1; i < lineData.length; i++) {
      path += ` L ${xScale(i)} ${yScale(lineData[i])}`;
    }
    path += ` L ${xScale(lineData.length - 1)} ${height} Z`;
    return path;
  }
</script>

<svg {width} {height} xmlns="http://www.w3.org/2000/svg">
  {#each multiDataPath as pathData, i}
    {#if fillArea}
      <!-- Create the area under the line -->
      <path class="area" d={pathData.area} fill={lineColors[i]} />
    {/if}
    <!-- Create the line chart -->
    <path class="line" d={pathData.line} stroke={lineColors[i]} />
  {/each}
</svg>

<style>
  svg {
    padding: 2px;
  }
  /* Add any styles you need for the chart here */
  .line {
    fill: none;
    stroke-width: 2;
  }

  .area {
    fill-opacity: 0.3;
  }
</style>
