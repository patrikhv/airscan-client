<template>
  <main v-if="sensor">
    <div
      class="flex flex-col items-center min-h-screen bg-white dark:bg-dark-primary"
    >
      <div
        class="min-w-full px-3 pb-3 border-b pt-8 border-gray-200 dark:border-gray-500 bg-gray-100 dark:bg-dark-secondary"
      >
        <div class="flex flex-row justify-between items-center min-h-full">
          <h1 class="dark:text-gray-100">
            {{ sensor.sensor_name || sensor.sensor_id }}
          </h1>
        </div>
      </div>

      <transition-group name="fade">
        <div
          v-for="(measurement, i) in sensor.measurements"
          v-bind:key="i"
          class="w-full"
        >
          <SensorData
            v-bind:measurement="measurement"
            v-bind:values="filterSensorEntries(measurement)"
          />
        </div>
      </transition-group>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import SensorData from "../components/SensorData";
export default {
  data: function () {
    return {
      sensorEntries: [],
    };
  },
  components: {
    SensorData,
  },
  methods: {
    ...mapGetters(["getPublicSensors"]),
    async getSensorEntries() {
      const { data } = await axios.get(
        `https://iot2-influx-writer.azurewebsites.net/query/all/?time=-1d&sensor_id=${this.sensor.sensor_id}&period=1d`
      );
      this.sensorEntries = data;
      console.log(data);
    },
    filterSensorEntries(measurement) {
      return this.sensorEntries
        .filter((a) => a.field === measurement)
        .reverse();
    },
  },
  created() {
    this.getSensorEntries();
  },
  computed: {
    sensor() {
      const id = this.$route.params.id;
      const data = this.getPublicSensors();
      console.log(data);
      console.log(data.find((i) => i.sensor_id == id));
      return data.find((i) => i.sensor_id == id);
    },
  },
};
</script>
