import Vue from "vue";
import VueRouter from "vue-router";
import UnderConstruction from "../views/UnderConstruction.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/",
    name: "UnderConstruction",
    component: UnderConstruction
  },
  {
    path: "/cv",
    name: "CV",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "CV" */ "../views/CV.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
