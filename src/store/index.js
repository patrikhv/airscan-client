import { createStore } from "vuex";
import axios from "axios";
import qs from "qs";
import session from "./modules/session.js";

const store = createStore({
  state: {
    publicSensors: null,
    notifications: null,
    darkMode: localStorage.getItem("dark_mode") === "true",
  },
  mutations: {
    setPublicSensors(state, data) {
      state.publicSensors = data;
    },
    setNotifications(state, data) {
      state.notifications = data;
    },
    changeDarkMode(state) {
      localStorage.setItem("dark_mode", !state.darkMode);
      state.darkMode = !state.darkMode;
    },
  },
  getters: {
    getPublicSensors(state) {
      return state.publicSensors;
    },
    getNotifications(state) {
      return state.notifications;
    },
    getDarkMode(state) {
      return state.darkMode;
    },
  },
  actions: {
    async updatePublicSensors(context) {
      const qsData = qs.stringify({
        owner: "public",
      });
      const { data } = await axios({
        method: "post",
        url: "https://iot2-mysql-interface.azurewebsites.net/select/",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: qsData,
      });
      context.commit("setPublicSensors", data);
    },
    async updateNotifications(context) {
      const { data } = await axios({
        method: "get",
        url:
          "https://iot2-notification-service.azurewebsites.net/notifications",
      });
      context.commit("setNotifications", data);
    },
  },
  modules: {
    session,
  },
});

export default store;
