<template>
  <div
    class="fixed z-1000 bottom-0 container h-16 flex justify-around items-center text-xs bg-gray-100 dark:bg-dark-secondary text-gray-800 dark:text-gray-50"
  >
    <router-link to="/">
      <img src="/sensor.svg" alt="sensor" class="icon" />
      Sensors
    </router-link>
    <router-link to="/sensors"
      ><div>
        <img src="/details.svg" alt="detail" class="icon" /> Details
      </div></router-link
    >
    <router-link to="/notifications"
      ><div>
        <img src="/notification.svg" alt="notification" class="icon" />
        Notifications
      </div></router-link
    >
    <router-link to="/settings"
      ><div>
        <img src="/settings.svg" alt="settings" class="icon" />
        Settings
      </div></router-link
    >
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
  filter: brightness(0%) saturate(100%) invert(66%) sepia(53%) saturate(577%)
    hue-rotate(92deg) brightness(90%) contrast(91%);
}
.icon {
  @apply h-8 m-auto p-1 filter dark:brightness-0 dark:invert;
}
</style>
