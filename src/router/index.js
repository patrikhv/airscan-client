import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";
import Sensors from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Sensors",
    component: Sensors,
  },
  {
    path: "/sensors",
    name: "PublicSensors",
    component: () => import("../views/PublicSensors.vue"),
  },
  {
    path: "/sensor/:id",
    name: "Sensor",
    component: () => import("../views/SensorView.vue"),
  },
  {
    path: "/public/sensor/:id",
    name: "PublicSensor",
    component: () => import("../views/PublicSensorDetails.vue"),
  },
  {
    path: "/sensor/:id/detail",
    name: "SensorMeasurement",
    component: () => import("../views/SensorMeasurement.vue"),
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
router.beforeEach((to) => {
  if (
    store.getters.authenticated === true ||
    ["/signin", "/auth"].includes(to.path)
  ) {
    return true;
  } else router.push("/signin");
});

export default router;
