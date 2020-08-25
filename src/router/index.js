import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/",
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/now",
    name: "Now",
    component: () => import("@/views/Now.vue"),
  },
  {
    path: "/cv",
    name: "CV",
    component: () => import("../views/CV.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
