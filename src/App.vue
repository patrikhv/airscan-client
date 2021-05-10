<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <Navbar v-if="showNavbar" />
</template>

<script>
import { mapActions } from "vuex";

import Navbar from "./components/Navbar";

const navbarAllowedPaths = [
  "",
  "sensor",
  "settings",
  "sensors",
  "public",
  "notifications",
];

export default {
  components: { Navbar },
  methods: {
    ...mapActions(["updatePublicSensors"]),
  },
  data: function () {
    return {
      showNavbar: false,
    };
  },
  created() {
    this.updatePublicSensors();
  },
  watch: {
    $route(to) {
      let route = to.path.substring(1); // removes / from path
      if (route.indexOf("/" !== -1)) {
        route = route.split("/")[0];
      }
      navbarAllowedPaths.includes(route)
        ? (this.showNavbar = true)
        : (this.showNavbar = false);
    },
  },
};
</script>
