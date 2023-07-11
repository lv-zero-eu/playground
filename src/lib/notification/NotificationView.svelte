<script lang="ts">
  import { fly } from "svelte/transition";
  import { Notification } from "./Notification";

  export let notifications: Notification[] = [];
  export let bg = "#f0f0f0;";
</script>

<div class="notifications">
  {#each notifications as notification (notification.id)}
    {#if notification.visible}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="notification"
        style={`background-color: ${bg};`}
        transition:fly={{ x: 500, duration: 300 }}
        on:click={() => (notification = notification.hide())}
      >
        <span>{notification.message}</span>
      </div>
    {/if}
  {/each}
</div>

<style>
  .notifications {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-height: 100vh;
    overflow: hidden;
  }
  .notification {
    padding: 10px;
    border-radius: 4px;
  }
</style>
