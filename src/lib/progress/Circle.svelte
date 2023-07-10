<script>
  export let progress = 0; // Progress value between 0 and 100
  export let size = 100; // Size of the circle in pixels
  export let strokeWidth = 10; // Stroke width of the circle in pixels
  export let color = "#000000"; // Color of the circle
  export let foregroundColor = "#ffffff"; // Foreground color for the progress

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
  width={size}
  height={size}
  style={`--circle-stroke-width: ${strokeWidth}px;`}
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
    stroke-dashoffset={-progressOffset}
  />
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
