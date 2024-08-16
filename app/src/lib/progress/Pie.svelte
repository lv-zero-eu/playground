<script>
  import Circle from "./Circle.svelte";

  export let progress = 0; // Progress value between 0 and 100
  export let size = 100; // Size of the circle in pixels
  export let color = "#000000"; // Color of the circle
  export let foregroundColor = "transparent";
  export let showProgress = false;
  export let title = "";
  export let inverted = true;

  let radius;
  let circumference;
  let progressOffset;

  $: {
    radius = size / 2;
    circumference = 2 * Math.PI * radius;
    progressOffset = (circumference * progress) / 100;
  }
</script>

<Circle
  {...{
    progress: progress,
    size,
    color,
    foregroundColor,
    showProgress,
    title,
    inverted,
    strokeWidth: size / 2,
  }}
/>
