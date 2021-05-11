<template>
  <router-link :to="link">
    <div
      class="cursor-pointer w-full flex items-center p-2 border-b border-gray-300 border-opacity-30 bg-white dark:bg-dark-primary"
    >
      <div class="w-11 h-11 rounded-full mr-2 bg-primary"></div>
      <div class="w-9/12">
        <h1 class="text-lg font-semibold dark:text-gray-100">
          {{ sensor.sensor_name || sensor.sensor_id }}
        </h1>
        <p
          class="text-sm font-light whitespace-nowrap overflow-ellipsis overflow-hidden text-gray-600 dark:text-gray-400"
        >
          {{ sensor.sensor_description }}
        </p>
      </div>
      <img
        src="arrow_right.svg"
        alt="arrow pointing to right"
        class="w-3 h-3 ml-auto"
      />
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["sensor"],
  computed: {
    link: function () {
      if (this.sensor == null) return "";
      return `/public/sensor/${this.sensor.sensor_id}`;
    },
  },
};
</script>

<style scoped></style>
