<template>
  <div
    class="cursor-pointer w-full flex items-center p-2 border-b border-gray-300 border-opacity-30 bg-white"
  >
    <img src="sensor.svg" alt="" class="mr-2" />
    <div class="w-9/12">
      <h1 class="text-lg font-semibold">{{ sensor.value }}</h1>
      <p
        class="text-sm whitespace-nowrap overflow-ellipsis overflow-hidden text-gray-500"
      >
        {{ sensor.key }}
      </p>
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
