<script>
  export let progress = 0; // Progress value between 0 and 100
  export let size = 100; // Size of the circle in pixels
  export let strokeWidth = 10; // Stroke width of the circle in pixels
  export let color = "#000000"; // Color of the circle
  export let foregroundColor = "#ffffff"; // Foreground color for the progress
  export let showProgress = false;
  export let title = "";

  let radius;
  let circumference;
  let progressOffset;

  $: {
    radius = (size - strokeWidth) / 2;
    circumference = 2 * Math.PI * radius;
    progressOffset = (circumference * (100 - progress)) / 100;
  }
</script>

<svg
  class="progress-circle"
  style={`--circle-size: ${size}px; --circle-stroke-width: ${strokeWidth}px;`}
>
  <circle
    class="background"
    cx={size / 2}
    cy={size / 2}
    r={radius}
    style={`stroke: ${color}; stroke-width: var(--circle-stroke-width);`}
  />
  <circle
    class="foreground"
    cx={size / 2}
    cy={size / 2}
    r={radius}
    style={`stroke: ${foregroundColor}; stroke-width: var(--circle-stroke-width);`}
    transform={`rotate(-90 ${size / 2} ${size / 2})`}
    stroke-dasharray={circumference}
    stroke-dashoffset={progressOffset}
  />
  {#if title}
    <text
      class="progress-title"
      x={size / 2}
      y={size / 2 - size / 10}
      text-anchor="middle"
      dominant-baseline="middle"
      style={`font-size: ${size / 3.8}px;`}
    >
      {title}
    </text>
  {/if}
  {#if showProgress}
    <text
      class="progress-text"
      x={size / 2}
      y={size / 2 + (title ? size / 8 : 0) + 1}
      text-anchor="middle"
      dominant-baseline="middle"
      style={`font-size: ${size / (title ? 5.2 : 4)}px;`}
    >
      {progress}%
    </text>
  {/if}
</svg>

<style>
  .foreground {
    fill: transparent;
    transition: stroke-dashoffset 0.3s linear;
  }

  .background {
    fill: transparent;
  }
</style>
