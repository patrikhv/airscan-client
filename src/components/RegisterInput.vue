<template>
  <div class="w-full mt-4">
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <div class="flex items-center justify-center mt-6">
      <input
        type="checkbox"
        name="checked"
        class="w-6 h-6 mr-2 form-checkbox rounded text-primary focus:ring-0 focus:ring-offset-0"
      />
      <p class="text-sm">
        I agree with airscan's
        <span class="text-primary">Terms and Conditions</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterInput",
  data: function () {
    return {};
  },
};
</script>

<style scoped>
input[type="email"],
input[type="password"],
input[type="text"] {
  @apply w-full h-14 pl-4 border-gray-200 border-b focus:ring-0 focus:ring-offset-0 focus:border-primary;
}
</style>
