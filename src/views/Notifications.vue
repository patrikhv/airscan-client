<template>
  <main class="w-full">
    <div class="flex flex-col items-center min-h-screen bg-white">
      <div
        class="min-w-full px-3 pb-3 border-b pt-8 border-gray-200 bg-gray-100"
      >
        <h1 class="">Notifications</h1>
      </div>
      <transition-group name="fade">
        <div
          v-for="notification in getNotifications()"
          v-bind:key="notification.notification_id"
          class="w-full"
        >
          <Notification :notification="notification" />
        </div>
      </transition-group>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Notification from "../components/Notification";

export default {
  components: {
    Notification,
  },
  methods: {
    ...mapGetters(["getNotifications"]),
    ...mapActions(["updateNotifications"]),
  },
  async created() {
    if (this.getNotifications() === null) await this.updateNotifications();
  },
};
</script>

<style scoped></style>
