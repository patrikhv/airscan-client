import Authenticator from "../../auth/Authenticator";
import router from "../../router";

const auth = new Authenticator();

const state = {
  authenticated: !!localStorage.getItem("access_token"),
  accessToken: localStorage.getItem("access_token"),
  idToken: localStorage.getItem("id_token"),
  expiresAt: localStorage.getItem("expires_at"),
  user: localStorage.getItem("user"),
  profile: JSON.parse(localStorage.getItem("profile")),
};

const getters = {
  authenticated(state) {
    return state.authenticated;
  },
  accessToken(state) {
    return state.accessToken;
  },
  idToken(state) {
    return state.idToken;
  },
  user(state) {
    return state.user;
  },
  profile(state) {
    return state.profile;
  },
};

const mutations = {
  authenticated(state, authData) {
    state.authenticated = true;
    state.accessToken = authData.accessToken;
    state.idToken = authData.idToken;
    state.expiresAt = authData.expiresIn * 1000 + new Date().getTime();
    state.user = authData.user;
    state.profile = authData.profile;
    console.log(authData.profile);

    localStorage.setItem("access_token", state.accessToken);
    localStorage.setItem("id_token", state.idToken);
    localStorage.setItem("expires_at", state.expiresAt);
    localStorage.setItem("user", state.user);
    localStorage.setItem("profile", JSON.stringify(state.profile));
  },

  logout(state) {
    state.authenticated = false;
    state.accessToken = null;
    state.idToken = false;
    state.user = null;
    state.profile = null;

    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("user");
    localStorage.removeItem("profile");
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
        auth.auth0.client.userInfo(
          authResult.accessToken,
          function (err, user) {
            if (err) console.log(err);
            authResult.user = user.sub;
            authResult.profile = authResult.idTokenPayload;
            commit("authenticated", authResult);
            router.push("/");
          }
        );
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
