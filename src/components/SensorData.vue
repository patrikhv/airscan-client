<template>
  <router-link :to="link">
    <div
      class="cursor-pointer w-full flex items-center p-2 border-b border-gray-300 border-opacity-30 bg-white"
    >
      <img src="/sensor.svg" alt="" class="mr-2" />
      <div class="w-9/12">
        <h1 class="text-lg font-semibold">{{ measurement }}</h1>
        <p
          class="text-sm whitespace-nowrap overflow-ellipsis overflow-hidden text-gray-500"
        >
          {{ values[0] != null ? values[0].value : "currently unavailable" }}
        </p>
      </div>
      <img
        src="/arrow_right.svg"
        alt="arrow pointing to right"
        class="w-3 ml-auto"
      />
    </div>
  </router-link>
</template>

<script>
import qs from "qs";

export default {
  props: ["measurement", "values"],
  computed: {
    link() {
      console.log(this.$route.params.id);
      return `${this.$route.path}/detail?${qs.stringify({
        measurement: this.measurement,
      })}`;
    },
  },
};
</script>

<style scoped></style>
