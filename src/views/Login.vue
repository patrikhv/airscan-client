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
      <LoginInput />
      <div class="flex flex-col items-center mt-12 pb-4">
        <button class="w-full h-12 rounded-xl text-white bg-primary">
          Sign in
        </button>
        <button
          class="h-10 mt-3 w-3/4 text-sm rounded-md flex items-center justify-center text-gray-500 bg-white"
        >
          <img src="google_logo.svg" alt="Google logo" class="w-6 mr-3" />
          Sign in with Google
        </button>
        <p class="pt-5 text-sm text-gray-600">
          Don't have an account?
          <router-link to="/register" class="text-primary"
            >Create account</router-link
          >
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import LoginInput from "../components/LoginInput";

export default {
  components: {
    LoginInput,
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
