import { createStore } from "vuex";
import axios from "axios";
import qs from "qs";
import session from "./modules/session.js";

const store = createStore({
  state: {
    publicSensors: null,
  },
  mutations: {
    setPublicSensors(state, data) {
      state.publicSensors = data;
    },
  },
  getters: {
    getPublicSensors: (state) => {
      return state.publicSensors;
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
      console.log(data);
    },
  },
  modules: {
    session,
  },
});

export default store;
