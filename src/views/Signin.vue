<template>
  <main>
    <div class="flex flex-col items-center pt-14 min-h-screen">
      <img src="logo.svg" alt="Logo" class="w-36" />
      <h1 class="dark:text-secondary tracking-wide">airscan</h1>
      <h2 class="font-semibold text-gray-600 dark:text-gray-200 tracking-wide">
        Air quality control
      </h2>
      <p class="font-light mt-5 text-center text-gray-600 dark:text-gray-300">
        Welcome back,<br />
        sign in to continue
      </p>
      <div class="flex flex-col items-center mt-24 pb-4">
        <button
          v-on:click="login"
          class="w-full h-12 px-6 rounded-xl text-white bg-primary"
        >
          Sign in with Auth0
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["login"]),
  },
};
</script>

<style scoped>
input {
  @apply w-full h-14 pl-4 border-gray-200 border-b;
}
button {
  @apply shadow-sm;
}
</style>
