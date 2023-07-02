<script lang="ts">
  import { fly } from "svelte/transition";
  import { Notification } from "./Notification";

  let notifications: Notification[] = [];

  function addNotification(message) {
    const notification = new Notification(message);
    notifications = [notification, ...notifications];

    setTimeout(() => {
      notification.visible = false;
      setTimeout(() => {
        notifications = notifications.filter((n) => n.id !== notification.id);
      }, 300);
    }, 5000);
  }
</script>

<button on:click={() => addNotification("Notification 1")}>
  Add Notification
</button>

<div class="notifications">
  {#each notifications as notification (notification.id)}
    {#if notification.visible}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="notification"
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
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 4px;
  }
</style>
