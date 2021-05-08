import { createRouter, createWebHistory } from "vue-router";
import Sensors from "../views/Main.vue";
import { routeGuard } from "../auth";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Sensors",
    component: Sensors,
    beforeEnter: routeGuard,
  },
  {
    path: "/sensor/:id",
    name: "Sensor",
    component: () => import("../views/SensorView.vue"),
  },

  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings.vue"),
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
