<template>
  <div
    class="cursor-pointer w-full flex items-center p-2 border-b border-gray-300 border-opacity-30 bg-white"
  >
    <div :class="priorityClass + ` priority`"></div>
    <div class="w-9/12">
      <h1 class="text-lg font-semibold">
        <img src="/sensor.svg" alt="" class="w-6 inline" />
        {{ notification.sensor_id }}
      </h1>
      <div class="flex justify-between">
        <p
          class="text-sm font-light whitespace-nowrap overflow-ellipsis overflow-hidden text-gray-600"
        >
          {{ notification.measurement }}:
          <span class="font-semibold">{{ notification.value }}</span>
        </p>
        <p class="font-thin text-sm">{{ timestamp }}</p>
      </div>
      <p class="text-sm">
        {{ notification.description }}
      </p>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default {
  props: ["notification"],
  computed: {
    priorityClass() {
      const priority = parseInt(this.notification.priority);
      return ["bg-primary", "bg-yellow-400", "bg-red-500"][priority - 1];
    },
    timestamp() {
      return dayjs().to(dayjs(this.notification.timestamp));
    },
  },
};
</script>

<style scoped>
.priority {
  @apply w-11 h-11 rounded-full mr-2;
}
</style>
