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
    name: "JOSHUA-PAUL-JACOB",
    component: Home,
  },
  {
    path: "/now",
    name: "NOW",
    component: () => import("@/views/Now.vue"),
  },
  // {
  //   path: "/ultimate",
  //   name: "Ultimate",
  //   component: () => import("@/views/Ultimate.vue"),
  // },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("@/views/Projects.vue"),
  },
  {
    path: "/cv",
    name: "CV",
    component: () => import("@/views/CV.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
