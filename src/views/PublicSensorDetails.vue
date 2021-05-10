<template>
  <main v-if="sensor != null">
    <div class="flex flex-col items-center min-h-screen bg-white">
      <div
        class="min-w-full px-3 pb-3 border-b pt-8 border-gray-200 bg-gray-100"
      >
        <div class="flex flex-row justify-between items-center min-h-full">
          <div>
            <h1 class="">Public sensor details</h1>
            <h2 class="text-lg text-secondary">{{ sensor.sensor_name }}</h2>
          </div>
          <button
            @click="follow"
            class="px-2 py-1 rounded-lg border text-xs border-primary text-primary"
          >
            Follow
          </button>
        </div>
      </div>
      <div class="px-2 mt-5 flex flex-col h-full">
        <div
          class="mb-5 flex flex-row justify-center rounded-lg bg-secondary text-gray-100"
        >
          <div class="pr-1">ID</div>
          <div>:</div>
          <div class="pl-1">{{ sensor.sensor_id }}</div>
        </div>
        <p class="text-gray-500">{{ sensor.sensor_description }}</p>
        <h5 class="text-xl font-bold">Available data:</h5>
        <ul class="pl-5 list-disc list-inside">
          <li v-for="(type, i) in sensor.measurements" v-bind:key="i">
            {{ type }}
          </li>
        </ul>
        <Map v-bind:coordinates="sensor.location" />
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import auth0 from "auth0-js";
import Map from "../components/Map";

export default {
  components: {
    Map,
  },
  methods: {
    ...mapGetters(["getPublicSensors", "accessToken", "user"]),
    changeFollowState() {},
    follow: function () {
      var auth0Manage = new auth0.Management({
        domain: "dev-jlpvvhw8.eu.auth0.com",
        token: this.accessToken(),
      });
      console.log(this.user());
      auth0Manage.getUser(this.user(), function (profile) {
        console.log(profile);
      });
    },
  },
  computed: {
    sensor() {
      const id = this.$route.params.id;
      const data = this.getPublicSensors();
      if (data == null) return;
      console.log(data.find((i) => i.sensor_id == id));
      return data.find((i) => i.sensor_id == id);
    },
  },
};
</script>

<style scoped></style>
