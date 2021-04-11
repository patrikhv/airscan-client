<template>
  <main>
    <div class="flex flex-col items-center pt-14 min-h-screen">
      <img src="logo.svg" alt="Logo" class="w-20" />
      <h1>airscan</h1>
      <h2 class="font-semibold text-gray-600">Air quality control</h2>
      <p class="font-light mt-5 text-center text-gray-600">
        Create an account to use our app
      </p>
      <RegisterInput />
      <div class="flex flex-col items-center mt-12 pb-4">
        <button class="w-full h-12 rounded-xl text-white bg-primary">
          Create account
        </button>
        <p class="pt-5 text-sm text-gray-600">
          Already have an account?
          <router-link to="/login" class="text-primary">Sign in</router-link>
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import RegisterInput from "../components/RegisterInput";
export default {
  name: "Register",
  components: {
    RegisterInput,
  },
};
</script>

<style scoped></style>
