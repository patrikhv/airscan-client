<template>
  <div>
    <l-map :center="coordinates.split(',')" :zoom="7" :options="mapOptions">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-marker :lat-lng="coordinates.split(',')"> </l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import { mapGetters } from "vuex";
import "leaflet/dist/leaflet.css";

export default {
  data: function () {
    return {
      mapOptions: {
        attributionControl: false,
      },
    };
  },
  props: ["coordinates"],
  methods: {
    ...mapGetters(["getDarkMode"]),
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
};
</script>

<style scoped>
div {
  @apply h-48 w-full my-6;
}
</style>
