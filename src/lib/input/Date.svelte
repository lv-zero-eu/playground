<script>
  export let startFromSunday = false;
  export let currentDate = new Date();
  let showCalendar = true;

  function getFirstDayOfMonth(date) {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return startFromSunday
      ? firstDay === 0
        ? 6
        : firstDay
      : firstDay - 1 < 0
      ? 6 - firstDay
      : firstDay - 1;
  }

  function getDaysInMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  function selectDate(day) {
    currentDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    showCalendar = false;
  }

  function prevMonth() {
    currentDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
  }

  function nextMonth() {
    currentDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
  }

  function toggleCalendar() {
    showCalendar = !showCalendar;
  }

  function getLocalizedDayNames() {
    var baseDate = new Date(Date.UTC(2022, 9, 31)); // just a Monday
    var weekDays = [];
    for (let i = 0; i < 7; i++) {
      weekDays.push(
        baseDate
          .toLocaleDateString(undefined, { weekday: "short" })
          .slice(0, 2) + "."
      );
      baseDate.setDate(baseDate.getDate() + 1);
    }
    if (startFromSunday) weekDays.unshift(weekDays.pop());
    return weekDays;
  }

</script>

<div class="selected-date" on:click={toggleCalendar}>
  {currentDate.toLocaleDateString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  })}
</div>

<div style={`display: ${showCalendar ? "block" : "none"}`} class="calendar">
  <div class="days">
    {#each getLocalizedDayNames() as dayName}
      <div class="day">{dayName}</div>
    {/each}

    {#each Array(getFirstDayOfMonth(currentDate)).fill() as _, i}
      <div class="day pre-month" />
    {/each}

    {#each Array(getDaysInMonth(currentDate))
      .fill()
      .map((_, i) => i + 1) as day}
      <div
        class="day {day === currentDate.getDate() &&
        currentDate.getMonth() === new Date().getMonth()
          ? 'current-day'
          : ''}"
        on:click={() => selectDate(day)}
      >
        {day}
      </div>
    {/each}
  </div>

  <div class="navigation">
    <button class="arrow" on:click={prevMonth}>&#8249;</button>
    <span
      >{currentDate.toLocaleString("default", {
        month: "long",
        year: "numeric",
      })}</span
    >
    <button class="arrow" on:click={nextMonth}>&#8250;</button>
  </div>
</div>

<style>
  .calendar {
    border-radius: 12px;
    border: 1px #eeeeee solid;
    margin-top: 5px;
    width: fit-content;
  }
  .days {
    display: grid;
    grid-template-columns: repeat(7, 20px);
  }

  .day {
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    height: 20px;
    font-size: 10px;
    border-radius: 50%;
  }

  .day:hover:not(.pre-month) {
    background-color: #eeeeee;
    cursor: pointer;
  }

  .current-day {
    background-color: #eeeeee;
  }

  .selected-date {
    display: inline-block;
    border: 1px solid #eeeeee;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
  }

  .navigation {
    border-top: 1px solid #eeeeee;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    padding: 2px 0;
  }

  .navigation .arrow {
    margin: 0 5px;
    padding: 0;
    padding-bottom: 10px;
    border: none;
    height: 20px;
    aspect-ratio: 1;
    background-color: #eeeeee;
    cursor: pointer;
    font-size: 14px;
    border-radius: 50%;
  }
</style>
