<template>
  <main>
    <div class="flex flex-col items-center min-h-screen bg-white">
      <div
        class="min-w-full px-3 pb-3 border-b pt-8 border-gray-200 bg-gray-100"
      >
        <div class="flex flex-row justify-between items-center min-h-full">
          <h1 class="">My sensors</h1>
          <img src="plus_icon.svg" alt="add new" class="w-7" />
        </div>
      </div>
      <transition-group name="fade">
        <div v-for="(sensor, i) in exampleData" v-bind:key="i" class="w-full">
          <Sensor v-bind:sensor="sensor" />
        </div>
      </transition-group>
    </div>
  </main>
</template>

<script>
import Sensor from "../components/SensorList";

export default {
  components: {
    Sensor,
  },
  data: function () {
    return {
      exampleData: [
        {
          title: "INT - Openlab TUKE",
          description: "All measured air quality indicators are OK",
          color: "#2ECC71",
        },
        {
          title: "INT - Canteen TUKE",
          description: "High PM2.5 density, smoke detected",
          color: "#95a5a6",
        },
        {
          title: "EXT - TUKE",
          description: "Unusual high smog value detected",
          color: "#e67e22",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
