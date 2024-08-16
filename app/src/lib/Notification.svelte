<script lang="ts">
  import { Notification } from "./notification/notification";
  import NotificationView from "./notification/NotificationView.svelte";

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

<NotificationView bind:notifications bg={"var(--bg-box)"} />
