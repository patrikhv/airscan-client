import { createStore } from "vuex";
import auth0Vuex from "auth0-vuex";

const store = createStore({
  state() {
    return {
      token: null,
      loading: true,
      isAuthenticated: false,
      user: {},
      popupOpen: false,
      error: null,
    };
  },
  mutations: {
    updateToken(state, token) {
      state.token = token;
    },
    changeLoadingState(state, bool) {
      state.loading = bool;
    },
  },
  actions: {},
  modules: {
    auth0: auth0Vuex,
  },
});

export default store;
