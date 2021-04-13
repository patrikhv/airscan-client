<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <Navbar v-if="showNavbar" />
</template>

<script>
import Navbar from "./components/Navbar";

const navbarAllowedPaths = [""];

export default {
  components: { Navbar },
  data: function () {
    return {
      showNavbar: false,
    };
  },
  watch: {
    $route(to) {
      console.log(to.path);
      const route = to.path.substring(1); // removes / from path
      navbarAllowedPaths.includes(route)
        ? (this.showNavbar = true)
        : (this.showNavbar = false);
    },
  },
};
</script>
