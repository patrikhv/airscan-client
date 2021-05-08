<template>
  <p>{{ accessToken() }}<br /></p>
  <button @click="logout">LOG OUT</button>
  <button @click="test">TEST BACKEND</button>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "settings",
  methods: {
    ...mapActions(["logout"]),
    ...mapGetters(["accessToken"]),
    // Log the user out
    async test() {
      const accessToken = this.accessToken();
      const { data } = await axios.get("http://localhost:8000/api/private/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(data);
      console.log(accessToken);
    },
  },
};
</script>

<style scoped>
button {
  @apply bg-primary text-white font-medium p-4 m-2;
}
</style>
