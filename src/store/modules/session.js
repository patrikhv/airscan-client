import Authenticator from "../../auth/Authenticator";

const auth = new Authenticator();

const state = {
  authenticated: !!localStorage.getItem("access_token"),
  accessToken: localStorage.getItem("access_token"),
  idToken: localStorage.getItem("id_token"),
  expiresAt: localStorage.getItem("expires_at"),
};

const getters = {
  authenticated(state) {
    return state.authenticated;
  },
  accessToken(state) {
    return state.accessToken;
  },
};

const mutations = {
  authenticated(state, authData) {
    state.authenticated = true;
    state.accessToken = authData.accessToken;
    state.idToken = authData.idToken;
    state.expiresAt = authData.expiresIn * 1000 + new Date().getTime();

    localStorage.setItem("access_token", state.accessToken);
    localStorage.setItem("id_token", state.idToken);
    localStorage.setItem("expires_at", state.expiresAt);
  },

  logout(state) {
    state.authenticated = false;
    state.accessToken = null;
    state.idToken = false;

    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  },
};

const actions = {
  login() {
    auth.login();
  },

  logout({ commit }) {
    commit("logout");
    auth.logout();
  },

  handleAuthentication({ commit }) {
    console.log("handleAuthentication in session.js");
    auth
      .handleAuthentication()
      .then((authResult) => {
        commit("authenticated", authResult);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
