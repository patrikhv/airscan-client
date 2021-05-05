<template>
  <main>
    <button
      class="m-2 px-2 py-1 bg-primary rounded-2xl"
      v-if="!authenticated"
      @click="login()"
    >
      Log In
    </button>

    <button
      class="m-2 px-2 py-1 bg-primary rounded-2xl"
      v-if="authenticated"
      @click="privateMessage()"
    >
      Call Private
    </button>

    <button
      class="m-2 px-2 py-1 bg-primary rounded-2xl"
      v-if="authenticated"
      @click="logout()"
    >
      Log Out
    </button>
    {{ message }}
    <br />
  </main>
</template>

<script>
import AuthService from "./../auth/AuthService";
import axios from "axios";

const API_URL = "http://localhost:8000"; //backend server
const auth = new AuthService();

export default {
  data() {
    this.handleAuthentication();
    this.authenticated = false;

    auth.authNotifier.on("authChange", (authState) => {
      this.authenticated = authState.authenticated;
    });

    return {
      authenticated: false,
      message: "", // will hold the response from your protected endpoint
    };
  },
  methods: {
    // this method calls the AuthService login() method
    login() {
      auth.login();
    },
    handleAuthentication() {
      auth.handleAuthentication();
    },
    logout() {
      auth.logout();
      this.message = "";
    },
    privateMessage() {
      const url = `${API_URL}/api/private/`;
      console.log(url);
      return axios
        .get(url, {
          headers: { Authorization: `Bearer ${auth.getAuthToken()}` },
        })
        .then((response) => {
          console.log(response.data);
          this.message = response.data || "";
        });
    },
  },
};
</script>

<style scoped></style>
