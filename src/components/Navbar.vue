<template>
  <div
    class="absolute bottom-0 w-screen h-16 flex justify-evenly items-center text-sm bg-gray-100 text-gray-500"
  >
    <router-link to="/">Home</router-link>
    <router-link to="/sensors">Public sensors</router-link>
    <router-link to="/notifications">Notifications</router-link>
    <router-link to="/settings">Settings</router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
router-link {
  @apply p-2;
}
.router-link-active {
  @apply text-primary;
}
</style>
