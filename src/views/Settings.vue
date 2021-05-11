<template>
  <main>
    <div
      class="flex flex-col items-center min-h-screen bg-white dark:bg-dark-primary"
    >
      <div
        class="min-w-full px-3 pb-3 border-b pt-8 border-gray-200 dark:border-gray-500 bg-gray-100 dark:bg-dark-secondary"
      >
        <div class="flex flex-row justify-between items-center min-h-full">
          <h1 class="dark:text-gray-100">Settings</h1>
        </div>
      </div>
      <div
        class="shadow-lg flex bg-white dark:bg-dark-light text-black dark:text-gray-200 rounded-lg p-3 m-3 items-center divide-x"
      >
        <img
          :src="profile().picture"
          referrerpolicy="no-referrer"
          class="w-12 mr-2 rounded-full"
        />
        <p class="font-semibold pl-2">
          {{ profile().name }}<br /><span class="font-normal">{{
            profile().email
          }}</span>
        </p>
      </div>
      <button @click="logout">Log out</button>
      <button
        @click="handleDarkModeChange"
        class="dark:bg-stars bg-cover bg-bottom"
      >
        {{
          getDarkMode() === true
            ? "Switch to light mode"
            : "Switch to dark mode"
        }}
      </button>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "settings",
  methods: {
    ...mapActions(["logout"]),
    ...mapGetters(["accessToken", "user", "profile", "getDarkMode"]),
    ...mapMutations(["changeDarkMode"]),
    handleDarkModeChange() {
      this.changeDarkMode();
      console.log(this.getDarkMode());
    },
  },
};
</script>

<style scoped>
button {
  @apply bg-primary text-white font-bold p-3 m-2 rounded-2xl;
}
</style>
