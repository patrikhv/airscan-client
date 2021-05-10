<template>
  <main>
    <div class="flex flex-col items-center min-h-screen bg-white">
      <div
        class="min-w-full px-3 pb-3 border-b pt-8 border-gray-200 bg-gray-100"
      >
        <div class="flex flex-row items-center min-h-full">
          <img
            src="/arrow_left.svg"
            alt="go back"
            @click="$router.go(-1)"
            class="w-7 mr-2 cursor-pointer"
          />
          <h1 class="text-2xl">
            ID: {{ $route.params.id }} |
            {{ $route.query.measurement }}
          </h1>
        </div>
      </div>
      <div v-if="!loading" class="mx-auto text-white p-2">
        <button
          :class="monthlyActive ? `bg-gray-300 opacity-50` : `bg-primary`"
          @click="monthlyActive = false"
        >
          Last 24 hours
        </button>
        <button
          :class="monthlyActive ? `bg-primary` : `bg-gray-300 opacity-50`"
          @click="monthlyActive = true"
        >
          Last 30 days
        </button>
      </div>
      <div v-if="!loading" class="w-full">
        <Chart v-bind="{ ...lineChart }" ref="chartEl" />
      </div>
      <div v-if="loading" class="text-xl">Loading chart...</div>
    </div>
  </main>
</template>

<script>
import Chart from "@j-t-mcc/vue3-chartjs";
import dayjs from "dayjs";
import axios from "axios";

export default {
  components: {
    Chart,
  },
  methods: {
    async getGraphData(monthly) {
      const { data } = await axios.get(
        `http://iot2-influx-writer.azurewebsites.net/query?time=${
          monthly ? "-30d" : "-1d"
        }&sensor_id=${this.$route.params.id}&period=${
          monthly ? "1d" : "1h"
        }&field=${this.$route.query.measurement}`
      );
      this.lineChart.data.labels = data.map((a) => {
        return new dayjs(a.timestamp).format("D.M | HH:mm");
      });
      this.lineChart.data.datasets[0].data = data.map((a) => a.value);
      this.loading = false;
      if (this.$refs.chartEl) this.$refs.chartEl.update(500);
      console.log(this.lineChart.data.labels);
    },
  },
  created() {
    this.getGraphData();
  },
  watch: {
    monthlyActive: function (val) {
      this.getGraphData(val);
    },
  },
  data: function () {
    return {
      monthlyActive: false,
      loading: true,
      lineChart: {
        type: "line",
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
        },
        data: {
          labels: [],
          datasets: [
            {
              data: [],
              borderWidth: 3,
              borderColor: "#2ECC71",
            },
          ],
        },
      },
    };
  },
};
</script>

<style scoped>
button {
  @apply rounded p-2;
}
</style>
