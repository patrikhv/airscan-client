<template>
  <div
    class="cursor-pointer w-full flex items-center p-3 border-b border-gray-300 border-opacity-30 bg-white"
  >
    <div
      :style="{ 'background-color': sensor.color }"
      class="w-11 h-11 rounded-full mr-2"
    ></div>
    <div>
      <h1 class="text-lg font-semibold">{{ sensor.title }}</h1>
      <h2 class="text-sm font-light text-gray-600">{{ sensor.description }}</h2>
    </div>
    <img
      src="arrow_right.svg"
      alt="arrow pointing to right"
      class="w-3 ml-auto"
    />
  </div>
</template>

<script>
export default {
  props: ["sensor"],
};
</script>

<style scoped></style>
