<template>
  <div
    class="fixed bottom-0 w-screen h-16 flex justify-around items-center text-xs bg-gray-100 text-gray-800"
  >
    <router-link to="/"
      ><div>
        <img src="/sensor.svg" alt="sensor" class="w-8 h-7 m-auto" /> Sensors
      </div></router-link
    >
    <router-link to="/sensors"
      ><div>
        <img src="/details.svg" alt="detail" class="w-7 h-7 m-auto" /> Details
      </div></router-link
    >
    <router-link to="/notifications"
      ><div>
        <img
          src="/notification.svg"
          alt="notification"
          class="w-7 h-7 m-auto"
        />
        Notifications
      </div></router-link
    >
    <router-link to="/settings"
      ><div>
        <img src="/settings.svg" alt="settings" class="w-7 h-7 m-auto" />
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
  filter: brightness(0) saturate(100%) invert(66%) sepia(53%) saturate(577%)
    hue-rotate(92deg) brightness(90%) contrast(91%);
}
</style>
