<template>
  <div class="h-48 w-full my-6">
    <l-map :center="coordinates.split(', ')" :zoom="7">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-marker :lat-lng="coordinates.split(', ')"> </l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  props: ["coordinates"],
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
};
</script>
