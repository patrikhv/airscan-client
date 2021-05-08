import { createRouter, createWebHistory } from "vue-router";
import Sensors from "../views/Main.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Sensors",
    component: Sensors,
  },
  {
    path: "/sensor/:id",
    name: "Sensor",
    component: () => import("../views/SensorView.vue"),
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("../views/Auth.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings.vue"),
  },
  {
    path: "/signin",
    name: "Sign in",
    component: () => import("../views/Signin.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
