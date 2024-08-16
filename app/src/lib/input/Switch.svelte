<script>
  export let checked = false; // The initial state of the switch
</script>

<label>
  <input type="checkbox" bind:checked />
  <span class="switch">
    <span class="circle" />
  </span>
</label>

<style>
  label{
    width: fit-content;
    height: 25px;
  }
  .switch {
    display: inline-block;
    width: 45px;
    height: 25px;
    background-color: #eeeeee;
    border-radius: 15px;
    position: relative;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .circle {
    position: absolute;
    top: 3px;
    left: 3px;
    height: calc(100% - 6px);
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"]:checked + .switch {
    background-color: #4caf50; /* green when "on" */
  }

  input[type="checkbox"]:checked + .switch .circle {
    transform: translateX(101%); /* move the circle to the right when "on" */
  }
</style>
