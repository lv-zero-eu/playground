<script>
  export let value = 0; // The initial value of the number picker
  export let min = 0; // The minimum value allowed
  export let max = 100; // The maximum value allowed

  function increaseValue() {
    if (value < max) {
      value += 1;
    }
  }

  function decreaseValue() {
    if (value > min) {
      value -= 1;
    }
  }
</script>

<div class="number-picker">
  <input bind:value class="value" {min} {max} type="number" />
  <div class="arrows">
    <div class="arrow" on:click={increaseValue}>&#9650;</div>
    <div class="arrow" on:click={decreaseValue}>&#9660;</div>
  </div>
</div>

<style>
  input::-webkit-outer-spin-button, /* Chrome, Safari, Edge, Opera */
  input::-webkit-inner-spin-button, /* Chrome, Safari, Edge, Opera */
  input[type="number"]  /* Firefox */ {
    -webkit-appearance: none; /* Hide default arrow */
    -moz-appearance: textfield; /* Hide default arrow */
    margin: 0;
    text-align: end;
  }

  .number-picker {
    display: flex;
    align-items: center;
    max-width: fit-content;
    height: 25px;
    background-color: #eeeeee;
    border-radius: 15px;
    position: relative;
    min-width: 45px;
    max-width: 45px;
    overflow: hidden;
  }

  .value {
    flex: 1;
    text-align: center;
    width: 20px;
    background-color: transparent;
    border: none;
  }

  .arrows {
    margin-top: -5px;
    display: flex;
    font-size: 10px;
    width: 18px;
    font-weight: bold;
    flex-direction: column;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }

  .arrow {
    height: 10px;
    cursor: pointer;
    text-align: center;
  }
</style>
