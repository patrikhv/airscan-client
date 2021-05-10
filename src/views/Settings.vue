<template>
  <main>
    <div class="flex flex-col items-center min-h-screen bg-white">
      <div
        class="min-w-full px-3 pb-3 border-b pt-8 border-gray-200 bg-gray-100"
      >
        <div class="flex flex-row justify-between items-center min-h-full">
          <h1 class="">Settings</h1>
        </div>
      </div>
      <div class="shadow-lg flex bg-white rounded-lg p-2 m-3 items-center">
        <img
          :src="profile().picture"
          referrerpolicy="no-referrer"
          class="w-14 rounded-full"
        />
        <p class="font-semibold pl-2">
          {{ profile().name }}<br /><span class="font-normal">{{
            profile().email
          }}</span>
        </p>
      </div>
      <button @click="logout">LOG OUT</button>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "settings",
  methods: {
    ...mapActions(["logout"]),
    ...mapGetters(["accessToken", "user", "profile"]),
    // Log the user out
  },
};
</script>

<style scoped>
button {
  @apply bg-primary text-white font-bold p-3 m-2 rounded-2xl;
}
</style>
