<template>
  <main>
    <div class="flex flex-col items-center min-h-screen bg-white">
      <div
        class="min-w-full px-3 pb-3 border-b pt-8 border-gray-200 bg-gray-100"
      >
        <div class="flex flex-row justify-between items-center min-h-full">
          <h1 class="">INT-Openlab TUKE</h1>
          <button
            class="px-2 py-1 rounded-lg border text-xs border-primary text-primary"
          >
            Unfollow
          </button>
        </div>
        <p class="text-sm text-gray-500">
          Last update: 22 December, 2021 8:30AM
        </p>
      </div>

      <transition-group name="fade">
        <div v-for="(sensor, i) in exampleData" v-bind:key="i" class="w-full">
          <SensorData v-bind:sensor="sensor" />
        </div>
      </transition-group>
    </div>
  </main>
</template>

<script>
import SensorData from "../components/SensorData";
export default {
  components: {
    SensorData,
  },
  data: function () {
    return {
      exampleData: [
        { key: "Temperature", value: 23.8 },
        { key: "Humidity", value: "80%" },
      ],
    };
  },
};
</script>
