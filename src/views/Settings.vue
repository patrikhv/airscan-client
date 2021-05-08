<template>
  <div class="home">
    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading.value">
      <!-- show logout when authenticated -->
      <button v-if="$auth.isAuthenticated.value" @click="logout">
        Log out
      </button>
      <button v-if="$auth.isAuthenticated.value" @click="test">
        Test Connection
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "settings",
  methods: {
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
    async test() {
      const accessToken = "";
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
