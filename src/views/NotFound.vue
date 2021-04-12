<template>
  <div
    class="min-h-screen w-screen flex flex-col items-center bg-waves bg-bottom bg-cover bg-no-repeat"
  >
    <img src="logo.svg" alt="logo" class="w-36 mt-4" />
    <h1 class="mt-4 text-secondary">404</h1>
    <h2 class="mb-4">Couldn't find {{ this.route }}</h2>
    <router-link
      to="/"
      class="px-3 py-2 rounded-xl text-white bg-primary shadow-sm"
      >Back to home</router-link
    >
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data: function () {
    return {
      route: "",
    };
  },
  mounted() {
    this.route = this.$route.path;
  },
};
</script>
