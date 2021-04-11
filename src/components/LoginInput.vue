<template>
  <div class="w-full mt-4">
    <input type="email" placeholder="Email" />
    <div class="relative">
      <input
        type="password"
        placeholder="Password"
        @focus="showFP = false"
        @blur="showFP = true"
      />
      <div
        class="h-full absolute top-0 right-0 flex flex-row-reverse items-center"
      >
        <transition name="fade">
          <router-link
            to="/login"
            class="text-sm p-2 text-primary"
            v-if="showFP"
            >Forgot Password?</router-link
          >
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginInput",
  data: function () {
    return {
      showFP: true,
    };
  },
};
</script>

<style scoped>
input {
  @apply w-full h-14 pl-4 border-gray-200 border-b focus:ring-0 focus:ring-offset-0 focus:border-primary;
}
</style>
