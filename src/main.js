import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";

import { domain, client_id, redirect_uri } from "./auth/auth_config.json";
import { setupAuth } from "./auth";
import store from "./store";

let app = createApp(App).use(router).use(store);

function callbackRedirect(appState) {
  router.push(appState && appState.targetUrl ? appState.targetUrl : "/");
}

setupAuth({ domain, client_id, redirect_uri }, callbackRedirect).then(
  (auth) => {
    app.use(auth).mount("#app");
  }
);
