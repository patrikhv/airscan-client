<template>
  <main>
    <div class="flex flex-col items-center min-h-screen bg-white">
      <div
        class="min-w-full px-3 pb-3 border-b pt-8 border-gray-200 bg-gray-100"
      >
        <h1 class="">My sensors</h1>
      </div>
      <transition-group name="fade">
        <div
          v-for="(sensor, i) in getPublicSensors()"
          v-bind:key="i"
          class="w-full"
        >
          <Sensor v-bind:sensor="sensor" />
        </div>
      </transition-group>
    </div>
  </main>
</template>

<script>
import Sensor from "../components/sensor/ListItemPrivate";
import { mapGetters } from "vuex";

export default {
  methods: {
    ...mapGetters(["getPublicSensors"]),
  },
  components: {
    Sensor,
  },
};
</script>
