<template>
  <main>
    <div class="flex flex-col items-center pt-14 min-h-screen">
      <img src="logo.svg" alt="Logo" class="w-20" />
      <h1>airscan</h1>
      <h2 class="font-semibold text-gray-600">Air quality control</h2>
      <p class="font-light mt-5 text-center text-gray-600">
        Welcome back,<br />
        sign in to continue
      </p>
      <div class="flex flex-col items-center mt-12 pb-4">
        <button
          v-on:click="login"
          class="w-full h-12 px-6 rounded-xl text-white bg-primary"
        >
          Sign in
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
