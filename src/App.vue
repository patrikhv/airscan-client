<template>
  <div v-bind:class="{ dark: darkMode, 'bg-dark-light': darkMode }">
    <div class="container mx-auto shadow dark:bg-dark-primary">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
      <Navbar v-if="showNavbar" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

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
    ...mapGetters(["getDarkMode"]),
  },
  data: function () {
    return {
      showNavbar: false,
      darkMode: this.getDarkMode(),
    };
  },
  created() {
    this.updatePublicSensors();
    console.log(localStorage.getItem("dark_mode"));
    console.log(localStorage.getItem("dark_mode") == true);
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
    "$store.state.darkMode"(to, from) {
      this.darkMode = to;
      console.log({ to, from });
    },
  },
};
</script>
