<template>
  <div>Authenticating...</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Auth",

  methods: mapActions(["handleAuthentication"]),
  async mounted() {
    await this.handleAuthentication();
  },
};
</script>
